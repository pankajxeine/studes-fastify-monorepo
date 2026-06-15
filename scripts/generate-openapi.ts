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
  if (!fs.existsSync(apiDir)) return [];

  const results: string[] = [];

  function walk(dir: string) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const fullPath = path.join(dir, f);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // ✅ recurse into subfolder
        walk(fullPath);
      } else if (f.endsWith('.openapi.yaml') || f === 'openapi.yaml') {
        results.push(fullPath);
      }
    }
  }

  walk(apiDir);
  return results;
}
function moduleNameFromSpec(specPath: string): string {
  const base = path.basename(specPath)
  return base.replace('.openapi.yaml', '')
}

function httpMethodFromKey(key: string): string {
  return key.toLowerCase()
}

function toRoutePath(pathKey: string): string {
  return pathKey.replace(/{/g, ':').replace(/}/g, '')
}

// const headerType = '{ tenantId?: string; tenantSlug?: string; authorization?: string }'

function writeGeneratorFiles(outDir?: string, module?: string) {
  if (!outDir) return "outDir not defined";
  const baseDir = path.join(outDir)
  const apiDir = path.join(baseDir, 'src', 'services')
  const specs = listSpecFiles(apiDir)
  if (specs.length === 0) return

  const servicesOutDir = path.join(apiDir)
  const routesOutDir = path.join(baseDir, 'src', 'routes')

  if (!fs.existsSync(servicesOutDir)) {
    fs.mkdirSync(servicesOutDir, { recursive: true })
  }
  if (!fs.existsSync(routesOutDir)) {
    fs.mkdirSync(routesOutDir, { recursive: true })
  }
  const allRoutes: string[] = [];
  const registerLines: string[] = [];

  for (const specPath of specs) {
    const raw = fs.readFileSync(specPath, 'utf8')
    const doc: any = yaml.load(raw)
    const schemas = (doc.components && doc.components.schemas) || {}
    const moduleName = moduleNameFromSpec(specPath)
    const parentDir = path.dirname(path.dirname(specPath));

    // Write types: one file per schema (with imports for referenced schemas)
    for (const [name, schema] of Object.entries(schemas)) {
      const typeModuleDir = path.join(parentDir, 'types');
      fs.mkdirSync(typeModuleDir, { recursive: true })
      const tsType = tsTypeFromSchema(schema)
      const refs = new Set<string>()
      collectSchemaRefs(schema, refs)
      refs.delete(name)
      const importLines = Array.from(refs)
        .sort()
        .map((refName) => `import type { ${refName} } from './${refName}'`)
        .join('\n')
      const prefix = importLines ? `${importLines}\n\n` : ''
      const filePath = path.join(typeModuleDir, `${name}.ts`)
      fs.writeFileSync(filePath, `${prefix}export type ${name} = ${tsType}\n`, 'utf8')
    }

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
          methods.push(
            `  ${operation.operationId}(app: FastifyInstance, input: ${requestType}, request?: FastifyRequest): Promise<${responseType}>`
          );

          methodStubs.push(
            `  public async ${operation.operationId}(app: FastifyInstance, input: ${requestType}, request?: FastifyRequest): Promise<${responseType}> {\n` +
            `    try {\n` +
            `      // TODO: implement logic using app + input\n` +
            `      void input;\n` +
            `      void request;\n` +
            `      throw new Error('Not implemented');\n` +
            `    } catch (err) {\n` +
            `      app.log.error(err);\n` +
            `      throw err;\n` +
            `    }\n` +
            `  }\n`
          );
        } else {
          methods.push(
            `  ${operation.operationId}(app: FastifyInstance, request?: FastifyRequest): Promise<${responseType}>`
          );

          methodStubs.push(
            `  public async ${operation.operationId}(app: FastifyInstance, request?: FastifyRequest): Promise<${responseType}> {\n` +
            `    try {\n` +
            `      // TODO: implement logic using app + request\n` +
            `      void request;\n` +
            `      throw new Error('Not implemented');\n` +
            `    } catch (err) {\n` +
            `      app.log.error(err);\n` +
            `      throw err;\n` +
            `    }\n` +
            `  }\n`
          );
        }


        const httpMethod = httpMethodFromKey(methodKey)
        const routePath = toRoutePath(pathKey)
        const handlerArgs = requestType
          ? 'request.body as any, request'
          : 'request'
        const responseLine = responseType === 'void' ?
          `  await controller.${operation.operationId}(app, ${handlerArgs}) \n
             reply.code(201) 
          `
          : ` return await reply.send(controller.${operation.operationId}(app, ${handlerArgs}))`

        routeDefs.push(
          `app.${httpMethod}('${routePath}', async (request, reply) => {`,
          `  ${responseLine}`,
          `})`
        )
      }
    }

    const schemaNames = Object.keys(schemas)
    const schemaImports = schemaNames
      .map((name) => `import type { ${name} } from './types/${name}'`)
      .join('\n')
    const importLine =
      `${schemaImports}${schemaImports ? '\n' : ''}` +
      `import { FastifyInstance, FastifyRequest} from 'fastify'\n\n`
    const controllerOut = `${importLine}export interface ${controllerName} {\n${methods.join('\n')}\n}\n`

    const contModuleDir = path.join(parentDir)
    fs.mkdirSync(contModuleDir, { recursive: true })
    fs.writeFileSync(path.join(contModuleDir, `${controllerName}.ts`), controllerOut, 'utf8')

    const shouldGenerateService = process.argv.includes('--generate-service')

    // generate service implementation with stubs for each method if --generate-service flag is provided, otherwise skip if file already exists
    // const serviceFilePath = path.join(servicesOutDir, serviceFileName)
    if (shouldGenerateService) {
      // TODO if file exist then get input to override or not, if not then create file with stub implementation
      const serviceSchemaImports = schemaNames
        .map((name) => `import type { ${name} } from './types/${name}'`)
        .join('\n')
      const serviceImports =
        `${serviceSchemaImports}${serviceSchemaImports ? '\n' : ''}` +
        `import { FastifyInstance, FastifyRequest } from 'fastify'\n` +
        `import type { ${controllerName} } from './${controllerName}'\n`
      const controllerImpl =
        `${serviceImports}\n` +
        `export class ${controllerImplName} implements ${controllerName} {\n` +
        `${methodStubs.join('\n')}` +
        `}\n`

      const serviceModuleDir = path.join(parentDir)
      fs.mkdirSync(serviceModuleDir, { recursive: true })
      fs.writeFileSync(path.join(serviceModuleDir, serviceFileName), controllerImpl, 'utf8')

      // if (!fs.existsSync(serviceFilePath)) {

      // } else {
      //   console.log(`Skipping service creation: ${serviceFileName} already exists`)
      // }
    } else {
      console.log(`Skipping service creation: ${serviceFileName} already exists`)
    }

    const routeOut =
      `import type { FastifyPluginAsync } from 'fastify'\n` +
      `import { ${controllerImplName} } from '../services/${moduleName}/${modulePascal}Service'\n` +
      `\n` +

      `const ${modulePascal}Routes: FastifyPluginAsync = async (app) => {\n` +
      `  const controller = new ${controllerImplName}()\n` +
      `${routeDefs.map((l) => `  ${l}`).join('\n')}\n` +
      `}\n` +
      `\n` +
      `export default ${modulePascal}Routes\n`

    fs.writeFileSync(path.join(routesOutDir, routesFileName), routeOut, 'utf8')

    allRoutes.push(`import ${modulePascal}Routes from './${moduleName}.router'`);
    registerLines.push(`  await app.register(${modulePascal}Routes)`);
  }
  const indexOut =
    `${allRoutes.join('\n')}\n\n` +
    `import type { FastifyInstance } from 'fastify'\n\n` +
    `export default async function registerRoutes(app: FastifyInstance) {\n` +
    `${registerLines.join('\n')}\n` +
    `}\n`;

  fs.writeFileSync(path.join(routesOutDir, 'index.ts'), indexOut, 'utf8');
}

const args = process.argv.slice(2);
let outDir: string | undefined;
let module: string | undefined;


for (let i = 0; i < args.length; i++) {
  if (args[i] === '--module') module = args[i + 1];
  if (args[i] === '--out') outDir = args[i + 1];
}

if (!outDir && !module) {
  console.error('Usage: npm run generate -- --sql schema.sql --service ./openapi');
  process.exit(1);
}

writeGeneratorFiles(outDir, module);
console.log('OpenAPI types, controllers, services, and routes generated.')
