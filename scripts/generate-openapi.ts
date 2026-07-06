import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

const Mustache = require('mustache')

const servicesDir = path.resolve(process.cwd(), 'services')

function toPascalCase(input: string): string {
  return input
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('')
}

function toLowerCamelCase(input: string): string {
  const pascal = toPascalCase(input)
  return pascal[0].toLowerCase() + pascal.slice(1)
}

function resolveRef(ref: string): string {
  if (!ref.startsWith('#/')) return 'unknown'

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
    const ref = resolveRef(schema.$ref)
    if (ref !== 'unknown') refs.add(ref)
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
  return base.replace('.openapi.yaml', '').replace('.yaml', '')
}

function normalizeModuleName(input: string): string {
  return input
    .replace(/\s+API\s*$/i, '')
    .replace(/\s+Service\s*$/i, '')
    .replace(/\s+API\s*-/i, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

function moduleNameFromDoc(specPath: string, doc: any): string {
  const fileModuleName = moduleNameFromSpec(specPath)
  if (fileModuleName && fileModuleName !== 'openapi') {
    return normalizeModuleName(fileModuleName)
  }

  if (doc.info && doc.info.title) {
    const normalized = normalizeModuleName(doc.info.title)
    if (normalized) return normalized
  }

  return 'openapi'
}

function operationNameFromPath(method: string, routePath: string): string {
  const pathName = routePath
    .split('/')
    .filter(Boolean)
    .map((part) => (part.startsWith(':') ? 'by_' + part.slice(1) : part))
    .join('_')

  return toLowerCamelCase(`${method}_${pathName || 'root'}`)
}

function toRoutePath(pathKey: string): string {
  return pathKey.replace(/{/g, ':').replace(/}/g, '')
}

function getServiceName(dirPath: string): string {
  const normalized = dirPath.replace(/\\/g, '/');
  const parts = normalized.split('/')
  const idx = parts.lastIndexOf('services')
  if (idx >= 0 && idx < parts.length - 1) {
    return parts.slice(idx + 1).join('/')
  }
  return parts.slice(-2).join('/')
}

function toImportPath(fromDir: string, toFileWithoutExtension: string): string {
  let relative = path.relative(fromDir, toFileWithoutExtension).replace(/\\/g, '/')
  if (!relative.startsWith('.')) relative = './' + relative
  return relative
}

function toEntityDecoratorBase(groupName: string): string {
  if (groupName === 'cpanels') return 'cpanel'
  if (groupName === 'cpanels_router') return 'cpanelRouter'

  return toLowerCamelCase(groupName)
}

function getModelDecoratorName(baseDir: string, parentDir: string): string | null {
  const srcServicesDir = path.join(baseDir, 'src', 'services')
  const relative = path.relative(srcServicesDir, parentDir).replace(/\\/g, '/')
  const [groupName, moduleName] = relative.split('/')

  if (!groupName || !moduleName) return null

  return `${toEntityDecoratorBase(groupName)}Models`
}

function crudActionFromOperation(httpMethod: string, routePath: string): string {
  const hasIdParam = routePath.split('/').some((part) => part.startsWith(':'))

  if (httpMethod === 'get' && hasIdParam) return 'read'
  if (httpMethod === 'get') return 'list'
  if (httpMethod === 'post') return 'create'
  if (httpMethod === 'put' || httpMethod === 'patch') return 'update'
  if (httpMethod === 'delete') return 'delete'

  return 'custom'
}

function getSpecRoots(baseDir: string): string[] {
  const openapiDir = path.join(baseDir, 'openapi')
  const apiDir = path.join(baseDir, 'api')
  const srcServicesDir = path.join(baseDir, 'src', 'services')
  const roots: string[] = []

  if (fs.existsSync(openapiDir)) roots.push(openapiDir)
  if (fs.existsSync(apiDir)) roots.push(apiDir)
  if (fs.existsSync(srcServicesDir)) roots.push(srcServicesDir)

  return roots
}

function isInsideDir(parentDir: string, childPath: string): boolean {
  const relative = path.relative(parentDir, childPath)
  return Boolean(relative) && !relative.startsWith('..') && !path.isAbsolute(relative)
}

function getSpecOutputDir(baseDir: string, specPath: string, moduleName: string): string {
  const specDir = path.dirname(specPath)
  const srcServicesDir = path.join(baseDir, 'src', 'services')

  if (path.basename(specDir) === 'api' && isInsideDir(srcServicesDir, specDir)) {
    return path.dirname(specDir)
  }

  return path.join(srcServicesDir, moduleName)
}

function discoverServiceDirs(): string[] {
  if (!fs.existsSync(servicesDir)) return []

  return fs
    .readdirSync(servicesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(servicesDir, entry.name))
    .filter((serviceDir) => getSpecRoots(serviceDir).some((specRoot) => listSpecFiles(specRoot).length > 0))
}

function loadTemplate(templateName: string): string {
  const templatePath = path.join(__dirname, 'templates', `${templateName}.mustache`)
  if (!fs.existsSync(templatePath)) {
    console.warn(`Template not found: ${templatePath}`)
    return ''
  }
  return fs.readFileSync(templatePath, 'utf8')
}

function generateTypes(schemas: Record<string, any>, typesDir: string) {
  const typeTemplate = loadTemplate('type')

  for (const [name, schema] of Object.entries(schemas)) {
    const tsType = tsTypeFromSchema(schema)
    const refs = new Set<string>()
    collectSchemaRefs(schema, refs)
    refs.delete(name)

    const imports = Array.from(refs).sort()
    const data = {
      typeName: name,
      typeDefinition: tsType,
      imports: imports.length > 0 ? imports : false,
    }

    const output = Mustache.render(typeTemplate, data)
    fs.writeFileSync(path.join(typesDir, `${name}.ts`), output, 'utf8')
  }
}

function generateController(
  modulePascal: string,
  schemas: Record<string, any>,
  methods: Array<{ methodSignature: string }>,
  parentDir: string
) {
  const controllerTemplate = loadTemplate('controller')
  const controllerName = `${modulePascal}Controller`

  const schemaNames = Object.keys(schemas)
  const data = {
    ControllerName: controllerName,
    imports: schemaNames.length > 0 ? schemaNames : false,
    methods: methods.length > 0 ? methods : false,
  }

  const output = Mustache.render(controllerTemplate, data)
  fs.writeFileSync(path.join(parentDir, `${controllerName}.ts`), output, 'utf8')
}

function generateService(
  modulePascal: string,
  schemas: Record<string, any>,
  methods: Array<any>,
  parentDir: string
) {
  const serviceTemplate = loadTemplate('service')
  const serviceName = `${modulePascal}Service`
  const controllerName = `${modulePascal}Controller`

  const schemaNames = Object.keys(schemas)
  const data = {
    ServiceName: serviceName,
    ControllerName: controllerName,
    imports: schemaNames.length > 0 ? schemaNames : false,
    methods: methods.length > 0 ? methods : false,
  }

  const output = Mustache.render(serviceTemplate, data)
  fs.writeFileSync(path.join(parentDir, serviceName + '.ts'), output, 'utf8')
}

function generateRouter(
  moduleName: string,
  modulePascal: string,
  routes: Array<any>,
  routesDir: string,
  serviceImportPath: string
) {
  const routerTemplate = loadTemplate('router')
  const serviceName = `${modulePascal}Service`
  const routesFileName = `${moduleName}.router.ts`

  const data = {
    ModuleName: modulePascal,
    ServiceName: serviceName,
    moduleName,
    serviceImportPath,
    routes: routes.length > 0 ? routes : false,
  }

  const output = Mustache.render(routerTemplate, data)
  fs.writeFileSync(path.join(routesDir, routesFileName), output, 'utf8')
}

function writeGeneratorFiles(outDir?: string, module?: string) {
  if (!outDir) {
    const serviceDirs = discoverServiceDirs()
    if (serviceDirs.length === 0) {
      console.warn(`No OpenAPI specs found under ${servicesDir}`)
      return
    }

    for (const serviceDir of serviceDirs) {
      writeGeneratorFiles(serviceDir, module)
    }
    return
  }

  const baseDir = path.join(outDir)
  const specRoots = getSpecRoots(baseDir)
  const specs = specRoots.flatMap(listSpecFiles)

  if (specs.length === 0) {
    console.warn(`No OpenAPI specs found in ${baseDir}/openapi or ${baseDir}/api`)
    return
  }

  const routesOutDir = path.join(baseDir, 'src', 'routes')

  if (!fs.existsSync(routesOutDir)) {
    fs.mkdirSync(routesOutDir, { recursive: true })
  }

  const allRoutes: string[] = [];
  const registerLines: string[] = [];
  const processedModules = new Set<string>();

  for (const specPath of specs) {
    const raw = fs.readFileSync(specPath, 'utf8')
    const doc: any = yaml.load(raw)
    const schemas = (doc.components && doc.components.schemas) || {}

    const moduleName = moduleNameFromDoc(specPath, doc)
    const parentDir = getSpecOutputDir(baseDir, specPath, moduleName);
    const moduleKey = `${moduleName}:${path.relative(baseDir, parentDir).replace(/\\/g, '/')}`

    if (processedModules.has(moduleKey)) {
      console.warn(`Skipping duplicate OpenAPI module "${moduleName}" from ${specPath}`)
      continue
    }
    processedModules.add(moduleKey)

    const modulePascal = toPascalCase(moduleName)
    const typesDir = path.join(parentDir, 'types');
    const modelDecoratorName = getModelDecoratorName(baseDir, parentDir)

    fs.mkdirSync(typesDir, { recursive: true })
    fs.mkdirSync(parentDir, { recursive: true })

    // Generate types
    generateTypes(schemas, typesDir)

    // Collect method info
    const methodSignatures: Array<{ methodSignature: string }> = []
    const methodImpls: Array<any> = []
    const routeDefs: Array<any> = []

    const paths = doc.paths || {}
    for (const [pathKey, ops] of Object.entries(paths)) {
      const opObj: any = ops
      for (const [methodKey, op] of Object.entries(opObj)) {
        const lower = methodKey.toLowerCase()
        if (!['get', 'post', 'put', 'patch', 'delete'].includes(lower)) continue

        const operation: any = op
        const operationId = operation.operationId || operationNameFromPath(lower, pathKey)

        const requestType = typeFromRequestBody(operation.requestBody)
        const responseType = typeFromResponse(pickSuccessResponse(operation.responses))
        const httpMethod = lower
        const routePath = toRoutePath(pathKey)

        let methodSignature: string
        let methodImpl: any
        let hasInput = false

        if (requestType) {
          methodSignature = `${operationId}(app: FastifyInstance, input: ${requestType}, request?: FastifyRequest): Promise<${responseType}>`
          methodImpl = {
            methodName: operationId,
            methodParams: `app: FastifyInstance, input: ${requestType}, request?: FastifyRequest`,
            returnType: responseType,
            hasInput: true,
          }
          hasInput = true
        } else {
          methodSignature = `${operationId}(app: FastifyInstance, request?: FastifyRequest): Promise<${responseType}>`
          methodImpl = {
            methodName: operationId,
            methodParams: `app: FastifyInstance, request?: FastifyRequest`,
            returnType: responseType,
            hasInput: false,
          }
        }

        methodSignatures.push({ methodSignature })
        const crudAction = crudActionFromOperation(httpMethod, routePath)
        methodImpls.push(methodImpl)
        methodImpl.modelDecoratorName = modelDecoratorName
        methodImpl.modelKey = moduleName
        methodImpl.hasModel = Boolean(modelDecoratorName)
        methodImpl.isList = crudAction === 'list'
        methodImpl.isCreate = crudAction === 'create'
        methodImpl.isRead = crudAction === 'read'
        methodImpl.isUpdate = crudAction === 'update'
        methodImpl.isDelete = crudAction === 'delete'
        methodImpl.isCrud = crudAction !== 'custom'
        routeDefs.push({
          operationId,
          httpMethod,
          path: routePath,
          hasInput,
        })
      }
    }

    // Generate controller
    generateController(modulePascal, schemas, methodSignatures, parentDir)

    // Generate service
    const shouldGenerateService = !process.argv.includes('--skip-service')
    if (shouldGenerateService) {
      generateService(modulePascal, schemas, methodImpls, parentDir)
    }

    // Generate router
    const serviceImportPath = toImportPath(routesOutDir, path.join(parentDir, `${modulePascal}Service`))
    generateRouter(moduleName, modulePascal, routeDefs, routesOutDir, serviceImportPath)

    allRoutes.push(`import ${modulePascal}Routes from './${moduleName}.router'`);
    registerLines.push(`  await app.register(${modulePascal}Routes)`);
  }

  //   const indexTemplate =
  //     `{{#imports}}
  // import {{.}} from './{{.}}.router'
  // {{/imports}}

  // import type { FastifyInstance } from 'fastify'

  // export default async function registerRoutes(app: FastifyInstance) {
  // {{#registers}}
  //   {{.}}
  // {{/registers}}
  // }
  // `

  // const indexData = {
  //   imports: allRoutes.map(line => {
  //     const match = line.match(/import (\w+)Routes from '\.\/(\w+)/)
  //     return match ? `${match[1]}Routes from './{{${match[1]}}}'` : line
  //   }),
  //   registers: registerLines.map(line => line.trim()),
  // }

  const indexOut =
    `${allRoutes.join('\n')}\n\n` +
    `import type { FastifyInstance } from 'fastify'\n\n` +
    `export default async function registerRoutes(app: FastifyInstance) {\n` +
    `${registerLines.join('\n')}\n` +
    `}\n`;

  fs.writeFileSync(path.join(routesOutDir, 'index.ts'), indexOut, 'utf8');
  console.log('✅ OpenAPI types, controllers, services, and routes generated successfully')
}

const args = process.argv.slice(2);
let outDir: string | undefined;
let module: string | undefined;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--module') module = args[i + 1];
  if (args[i] === '--out') outDir = args[i + 1];
}

if (!outDir && !module) {
  console.log('No --out provided; scanning services/* for OpenAPI specs')
}

writeGeneratorFiles(outDir, module);
