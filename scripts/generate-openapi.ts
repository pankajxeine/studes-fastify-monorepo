import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

const servicesDir = path.resolve(process.cwd(), 'services')

function toPascalCase(input: string): string {
  return input
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('')
}

function resolveRef(ref: string): string {
  const parts = ref.split('/')
  return parts[parts.length - 1]
}

function tsTypeFromSchema(schema: any): string {
  if (!schema) return 'unknown'
  if (schema.$ref) return resolveRef(schema.$ref)
  if (schema.oneOf || schema.anyOf) {
    const union = (schema.oneOf || schema.anyOf).map(tsTypeFromSchema).join(' | ')
    return union || 'unknown'
  }
  if (schema.allOf) {
    const intersect = schema.allOf.map(tsTypeFromSchema).join(' & ')
    return intersect || 'unknown'
  }
  if (schema.enum) {
    return schema.enum.map((v: string) => JSON.stringify(v)).join(' | ')
  }
  if (schema.type === 'array') {
    const itemType = tsTypeFromSchema(schema.items)
    return `${itemType}[]`
  }
  if (schema.type === 'object' || schema.properties) {
    const props = schema.properties || {}
    const required = new Set(schema.required || [])
    const lines = Object.keys(props).map((key) => {
      const optional = required.has(key) ? '' : '?'
      const propType = tsTypeFromSchema(props[key])
      return `  ${key}${optional}: ${propType}`
    })
    if (lines.length === 0) return 'Record<string, unknown>'
    return `\n{\n${lines.join('\n')}\n}`
  }
  switch (schema.type) {
    case 'string':
      return 'string'
    case 'number':
    case 'integer':
      return 'number'
    case 'boolean':
      return 'boolean'
    case 'null':
      return 'null'
    default:
      return 'unknown'
  }
}

function collectSchemaRefs(schema: any, refs: Set<string>) {
  if (!schema) return
  if (schema.$ref) {
    refs.add(resolveRef(schema.$ref))
    return
  }
  if (schema.oneOf || schema.anyOf) {
    for (const s of schema.oneOf || schema.anyOf) collectSchemaRefs(s, refs)
    return
  }
  if (schema.allOf) {
    for (const s of schema.allOf) collectSchemaRefs(s, refs)
    return
  }
  if (schema.type === 'array') {
    collectSchemaRefs(schema.items, refs)
    return
  }
  if (schema.type === 'object' || schema.properties) {
    const props = schema.properties || {}
    for (const s of Object.values(props)) {
      collectSchemaRefs(s, refs)
    }
  }
}

function pickSuccessResponse(responses: any): any {
  if (!responses) return null
  const codes = Object.keys(responses)
  const success = codes.find((c) => c.startsWith('2'))
  return success ? responses[success] : null
}

function typeFromResponse(resp: any): string {
  if (!resp || !resp.content) return 'void'
  const content = resp.content['application/json'] || resp.content['text/plain']
  if (!content || !content.schema) return 'void'
  return tsTypeFromSchema(content.schema)
}

function typeFromRequestBody(body: any): string | null {
  if (!body || !body.content) return null
  const content = body.content['application/json']
  if (!content || !content.schema) return null
  return tsTypeFromSchema(content.schema)
}

function listSpecFiles(apiDir: string): string[] {
  if (!fs.existsSync(apiDir)) return []
  const files = fs.readdirSync(apiDir)
  return files
    .filter((f) => f.endsWith('.openapi.yaml') || f === 'openapi.yaml')
    .map((f) => path.join(apiDir, f))
}

function moduleNameFromSpec(serviceName: string, specPath: string): string {
  const base = path.basename(specPath)
  if (base === 'openapi.yaml') return serviceName
  return base.replace('.openapi.yaml', '')
}

function httpMethodFromKey(key: string): string {
  return key.toLowerCase()
}

function toRoutePath(pathKey: string): string {
  return pathKey.replace(/{/g, ':').replace(/}/g, '')
}

const headerType = '{ tenantId?: string; tenantSlug?: string; authorization?: string }'

const serviceNames = fs
  .readdirSync(servicesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)

for (const service of serviceNames) {
  const apiDir = path.join(servicesDir, service, 'api')
  const specs = listSpecFiles(apiDir)
  if (specs.length === 0) continue

  const openapiDir = path.join(servicesDir, service, 'src', 'openapi')
  const controllerDir = path.join(openapiDir, 'controller')
  const typesDir = path.join(openapiDir, 'types')
  fs.mkdirSync(controllerDir, { recursive: true })
  fs.mkdirSync(typesDir, { recursive: true })

  const servicesOutDir = path.join(servicesDir, service, 'src', 'services')
  const routesOutDir = path.join(servicesDir, service, 'src', 'routes')
  fs.mkdirSync(servicesOutDir, { recursive: true })
  fs.mkdirSync(routesOutDir, { recursive: true })

  fs.writeFileSync(path.join(typesDir, 'RequestHeaders.ts'), `export type RequestHeaders = ${headerType}\n`, 'utf8')

  for (const specPath of specs) {
    const raw = fs.readFileSync(specPath, 'utf8')
    const doc: any = yaml.load(raw)
    const schemas = (doc.components && doc.components.schemas) || {}

    // Write types: one file per schema (with imports for referenced schemas)
    for (const [name, schema] of Object.entries(schemas)) {
      const tsType = tsTypeFromSchema(schema)
      const refs = new Set<string>()
      collectSchemaRefs(schema, refs)
      refs.delete(name)
      const importLines = Array.from(refs)
        .sort()
        .map((refName) => `import type { ${refName} } from './${refName}'`)
        .join('\n')
      const prefix = importLines ? `${importLines}\n\n` : ''
      const filePath = path.join(typesDir, `${name}.ts`)
      fs.writeFileSync(filePath, `${prefix}export type ${name} = ${tsType}\n`, 'utf8')
    }

    const moduleName = moduleNameFromSpec(service, specPath)
    const modulePascal = toPascalCase(moduleName)
    const controllerName = `${modulePascal}Controller`
    const controllerImplName = `${modulePascal}Service`
    const routesFileName = `${moduleName}.router.ts`
    const serviceFileName = `${modulePascal}Service.ts`

    const methods: string[] = []
    const methodStubs: string[] = []
    const routeDefs: string[] = []

    const paths = doc.paths || {}
    for (const [pathKey, ops] of Object.entries(paths)) {
      const opObj: any = ops
      for (const [methodKey, op] of Object.entries(opObj)) {
        const lower = methodKey.toLowerCase()
        if (!['get', 'post', 'put', 'patch', 'delete'].includes(lower)) continue

        const operation: any = op
        if (!operation.operationId) continue

        const requestType = typeFromRequestBody(operation.requestBody)
        const responseType = typeFromResponse(pickSuccessResponse(operation.responses))

        if (requestType) {
          methods.push(`  ${operation.operationId}(input: ${requestType}, headers?: RequestHeaders): Promise<${responseType}>`)
          methodStubs.push(
            `  public async ${operation.operationId}(input: ${requestType}, headers?: RequestHeaders): Promise<${responseType}> {\n` +
              `    void input\n` +
              `    void headers\n` +
              `    throw new Error('Not implemented')\n` +
              `  }\n`
          )
        } else {
          methods.push(`  ${operation.operationId}(headers?: RequestHeaders): Promise<${responseType}>`)
          methodStubs.push(
            `  public async ${operation.operationId}(headers?: RequestHeaders): Promise<${responseType}> {\n` +
              `    void headers\n` +
              `    throw new Error('Not implemented')\n` +
              `  }\n`
          )
        }

        const httpMethod = httpMethodFromKey(methodKey)
        const routePath = toRoutePath(pathKey)
        const handlerArgs = requestType
          ? 'request.body as any, buildHeaders(request)'
          : 'buildHeaders(request)'
        const responseLine = responseType === 'void' ? 'await' : 'return await'

        routeDefs.push(
          `app.${httpMethod}('${routePath}', async (request, reply) => {`,
          `  ${responseLine} controller.${operation.operationId}(${handlerArgs})`,
          `})`
        )
      }
    }

    const schemaNames = Object.keys(schemas)
    const schemaImports = schemaNames
      .map((name) => `import type { ${name} } from '../types/${name}'`)
      .join('\n')
    const importLine =
      `${schemaImports}${schemaImports ? '\n' : ''}` +
      `import type { RequestHeaders } from '../types/RequestHeaders'\n\n`
    const controllerOut = `${importLine}export interface ${controllerName} {\n${methods.join('\n')}\n}\n`
    fs.writeFileSync(path.join(controllerDir, `${controllerName}.ts`), controllerOut, 'utf8')

    const serviceSchemaImports = schemaNames
      .map((name) => `import type { ${name} } from '../openapi/types/${name}'`)
      .join('\n')
    const serviceImports =
      `${serviceSchemaImports}${serviceSchemaImports ? '\n' : ''}` +
      `import type { RequestHeaders } from '../openapi/types/RequestHeaders'\n` +
      `import type { ${controllerName} } from '../openapi/controller/${controllerName}'\n`
    const controllerImpl =
      `${serviceImports}\n` +
      `export class ${controllerImplName} implements ${controllerName} {\n` +
      `${methodStubs.join('\n')}` +
      `}\n`
    fs.writeFileSync(path.join(servicesOutDir, serviceFileName), controllerImpl, 'utf8')

    const routeOut =
      `import type { FastifyPluginAsync } from 'fastify'\n` +
      `import { ${controllerImplName} } from '../services/${modulePascal}Service'\n` +
      `\n` +
      `function buildHeaders(request: any) {\n` +
      `  return {\n` +
      `    tenantId: request.headers['x-tenant-id'] as string | undefined,\n` +
      `    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,\n` +
      `    authorization: request.headers['authorization'] as string | undefined\n` +
      `  }\n` +
      `}\n` +
      `\n` +
      `const ${modulePascal}Routes: FastifyPluginAsync = async (app) => {\n` +
      `  const controller = new ${controllerImplName}()\n` +
      `${routeDefs.map((l) => `  ${l}`).join('\n')}\n` +
      `}\n` +
      `\n` +
      `export default ${modulePascal}Routes\n`

    fs.writeFileSync(path.join(routesOutDir, routesFileName), routeOut, 'utf8')
  }
}

console.log('OpenAPI types, controllers, services, and routes generated.')
