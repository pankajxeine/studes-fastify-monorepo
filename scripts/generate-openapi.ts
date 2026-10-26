import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

const Mustache = require('mustache')

const servicesDir = path.resolve(process.cwd(), 'services')

function loadForeignKeyTables(): Set<string> {
  const schemaPath = path.resolve(process.cwd(), 'infra', 'skeleton_cpanel.sql')
  if (!fs.existsSync(schemaPath)) return new Set()

  const sql = fs.readFileSync(schemaPath, 'utf8')
  const tables = new Set<string>()
  const foreignKeyPattern = /ALTER\s+TABLE\s+(?:"([\w$]+)"|`([\w$]+)`|([\w$]+))\s+ADD\s+(?:CONSTRAINT\s+[\w$]+\s+)?FOREIGN\s+KEY\s*\(/gi
  let match: RegExpExecArray | null
  while ((match = foreignKeyPattern.exec(sql)) !== null) {
    tables.add((match[1] || match[2] || match[3]).toLowerCase())
  }

  const inlineForeignKeyPattern = /CREATE\s+TABLE\s+(?:"([\w$]+)"|`([\w$]+)`|([\w$]+))\s*\(([\s\S]*?)\n\);/gi
  while ((match = inlineForeignKeyPattern.exec(sql)) !== null) {
    if (/\bFOREIGN\s+KEY\s*\(/i.test(match[4])) {
      tables.add((match[1] || match[2] || match[3]).toLowerCase())
    }
  }
  return tables
}

const foreignKeyTables = loadForeignKeyTables()

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
  const type = tsTypeFromSchemaInner(schema)
  return schema?.nullable && !type.includes('null') ? `(${type}) | null` : type
}

function tsTypeFromSchemaInner(schema: any): string {
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
  if (Array.isArray(schema.enum) && schema.enum.length > 0) {
    return schema.enum.map((value: unknown) => JSON.stringify(value)).join(' | ')
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
  return tsTypeFromSchema(content.schema).trim()
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

function getPathParameterName(pathKey: string, operation: any): string | null {
  const placeholders = [...pathKey.matchAll(/\{([^}]+)\}/g)].map(match => match[1])
  if (placeholders.length !== 1) return null

  const declaredParameters = Array.isArray(operation?.parameters) ? operation.parameters : []
  const declared = declaredParameters.find((parameter: any) => parameter?.in === 'path' && parameter.name === placeholders[0])
  return declared?.name ?? placeholders[0]
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

function getRouteGroup(baseDir: string, moduleDir: string): string | null {
  const srcServicesDir = path.join(baseDir, 'src', 'services')
  if (!isInsideDir(srcServicesDir, moduleDir)) return null
  const relative = path.relative(srcServicesDir, moduleDir).replace(/\\/g, '/')
  const [parentModule] = relative.split('/')
  return parentModule || null
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
      isEnum: Array.isArray(schema.enum) && schema.enum.length > 0,
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
  parentDir: string,
  sharedTypesImportPath: string
) {
  const controllerTemplate = loadTemplate('controller')
  const controllerName = `${modulePascal}Controller`

  const schemaNames = Object.keys(schemas)
  const data = {
    ControllerName: controllerName,
    imports: schemaNames.length > 0 ? schemaNames : false,
    methods: methods.length > 0 ? methods : false,
    hasList: methods.some(method => method.methodSignature.includes('PaginatedResponse<')),
    sharedTypesImportPath,
  }

  const output = Mustache.render(controllerTemplate, data)
  fs.writeFileSync(path.join(parentDir, `${controllerName}.ts`), output, 'utf8')
}

function generateService(
  modulePascal: string,
  schemas: Record<string, any>,
  methods: Array<any>,
  parentDir: string,
  sharedTypesImportPath: string
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
    hasForeignKeys: methods.some((method) => method.hasForeignKeys),
    hasList: methods.some((method) => method.isList),
    hasCrud: methods.some((method) => method.hasModel && method.isCrud),
    hasWrites: methods.some((method) => method.hasModel && method.isCrud && (method.isCreate || method.isUpdate)),
    hasHttpErrors: methods.some((method) => method.hasModel && method.isCrud && (method.isRead || method.isUpdate || method.isDelete)),
    sharedTypesImportPath,
  }

  const output = Mustache.render(serviceTemplate, data)
  fs.writeFileSync(path.join(parentDir, serviceName + '.ts'), output, 'utf8')
}

function ensurePaginatedResponseType(baseDir: string, parentDir: string): string {
  const typePath = path.join(baseDir, 'src', 'types', 'PaginatedResponse.ts')
  fs.mkdirSync(path.dirname(typePath), { recursive: true })
  if (!fs.existsSync(typePath)) {
    fs.writeFileSync(typePath, `export type ListItem<T> = T extends (infer Item)[] ? Item : T\n\nexport interface PaginatedResponse<T> {\n  data: T[]\n  pagination: {\n    page: number\n    limit: number\n    total: number\n    totalPages: number\n  }\n}\n`, 'utf8')
  }
  return toImportPath(parentDir, typePath.replace(/\.ts$/, ''))
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
  fs.mkdirSync(routesDir, { recursive: true })

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

function discoverRouterFiles(routesDir: string): string[] {
  const files: string[] = []
  if (!fs.existsSync(routesDir)) return files

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(fullPath)
      else if (entry.isFile() && entry.name.endsWith('.router.ts')) files.push(fullPath)
    }
  }

  walk(routesDir)

  // Prefer grouped routers over legacy flat files with the same module name,
  // while allowing same-named modules under different parent groups.
  const groupedFiles = files.filter(file => path.dirname(file) !== routesDir)
  const groupedModuleNames = new Set(groupedFiles.map(file => path.basename(file, '.router.ts')))
  const flatFiles = files.filter(file => path.dirname(file) === routesDir)
    .filter(file => !groupedModuleNames.has(path.basename(file, '.router.ts')))
  return [...groupedFiles, ...flatFiles].sort((a, b) => a.localeCompare(b))
}

function writeGeneratorFiles(
  outDir?: string,
  moduleFilter?: string,
  specDir?: string,
  skipService = false,
  dryRun = false,
  routesOnly = false
) {
  if (!outDir) {
    if (moduleFilter || specDir) {
      throw new Error('--module and --spec-dir require --out <service-directory>')
    }
    const serviceDirs = discoverServiceDirs()
    if (serviceDirs.length === 0) {
      console.warn(`No OpenAPI specs found under ${servicesDir}`)
      return
    }

    for (const serviceDir of serviceDirs) {
      writeGeneratorFiles(serviceDir, undefined, undefined, skipService, dryRun, routesOnly)
    }
    return
  }

  const baseDir = path.join(outDir)
  const specRoots = getSpecRoots(baseDir)
  const allSpecs = specDir
    ? listSpecFiles(path.resolve(process.cwd(), specDir))
    : specRoots.flatMap(listSpecFiles)
  const specs = moduleFilter
    ? allSpecs.filter(specPath => {
        const doc: any = yaml.load(fs.readFileSync(specPath, 'utf8'))
        const target = normalizeModuleName(moduleFilter)
        const pathMatch = path.relative(baseDir, specPath).split(path.sep)
          .some(part => normalizeModuleName(part) === target)
        return pathMatch || moduleNameFromDoc(specPath, doc) === target
      })
    : allSpecs

  if (specs.length === 0) {
    const scope = specDir ? path.resolve(process.cwd(), specDir) : moduleFilter ? `module "${moduleFilter}"` : `${baseDir}/openapi or ${baseDir}/api`
    throw new Error(`No OpenAPI specs found for ${scope}`)
  }

  if (dryRun) {
    console.log(`Would generate from ${specs.length} OpenAPI spec${specs.length === 1 ? '' : 's'} in ${baseDir}:`)
    for (const specPath of specs) console.log(`- ${path.relative(baseDir, specPath)}`)
    return
  }

  const routesOutDir = path.join(baseDir, 'src', 'routes')

  if (!fs.existsSync(routesOutDir)) {
    fs.mkdirSync(routesOutDir, { recursive: true })
  }

  const processedModules = new Set<string>();

  for (const specPath of specs) {
    const raw = fs.readFileSync(specPath, 'utf8')
    const doc: any = yaml.load(raw)
    const schemas = (doc.components && doc.components.schemas) || {}

    const moduleName = moduleNameFromDoc(specPath, doc)
    const sqlTableName = typeof doc['x-sql-table'] === 'string' ? doc['x-sql-table'] : moduleName
    const parentDir = getSpecOutputDir(baseDir, specPath, moduleName);
    const moduleKey = `${moduleName}:${path.relative(baseDir, parentDir).replace(/\\/g, '/')}`

    if (processedModules.has(moduleKey)) {
      console.warn(`Skipping duplicate OpenAPI module "${moduleName}" from ${specPath}`)
      continue
    }
    processedModules.add(moduleKey)

    const modulePascal = toPascalCase(moduleName)
    const modelDecoratorName = getModelDecoratorName(baseDir, parentDir)

    if (!routesOnly) {
      const typesDir = path.join(parentDir, 'types')
      fs.mkdirSync(typesDir, { recursive: true })
      fs.mkdirSync(parentDir, { recursive: true })
      generateTypes(schemas, typesDir)
    }

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
        const crudAction = crudActionFromOperation(httpMethod, routePath)
        const permissionModule = getRouteGroup(baseDir, parentDir) ?? 'crm'
        const permissionAction = httpMethod === 'get'
          ? 'read'
          : httpMethod === 'post'
            ? 'create'
            : httpMethod === 'delete'
              ? 'delete'
              : 'update'
        const routeConfig = operation['x-fastify-config'] && typeof operation['x-fastify-config'] === 'object'
          ? { ...operation['x-fastify-config'] }
          : {}
        const declaredPermission = typeof operation['x-admin-permission'] === 'string'
          ? operation['x-admin-permission']
          : undefined
        if (routeConfig.isPublic !== true) {
          routeConfig.adminPermission ??= declaredPermission ?? `${permissionModule}.${moduleName}.${permissionAction}`
        }
        const returnType = crudAction === 'list'
          ? `PaginatedResponse<ListItem<${responseType}>>`
          : responseType

        let methodSignature: string
        let methodImpl: any
        let hasInput = false

        if (requestType) {
          methodSignature = `${operationId}(app: FastifyInstance, input: ${requestType}, request?: FastifyRequest): Promise<${returnType}>`
          methodImpl = {
            methodName: operationId,
            methodParams: `app: FastifyInstance, input: ${requestType}, request?: FastifyRequest`,
            returnType,
            responseType,
            hasInput: true,
          }
          hasInput = true
        } else {
          methodSignature = `${operationId}(app: FastifyInstance, request?: FastifyRequest): Promise<${returnType}>`
          methodImpl = {
            methodName: operationId,
            methodParams: `app: FastifyInstance, request?: FastifyRequest`,
            returnType,
            responseType,
            hasInput: false,
          }
        }

        methodSignatures.push({ methodSignature })
        methodImpls.push(methodImpl)
        methodImpl.modelDecoratorName = modelDecoratorName
        methodImpl.modelKey = sqlTableName
        methodImpl.hasModel = Boolean(modelDecoratorName)
        methodImpl.hasForeignKeys = modelDecoratorName === 'cpanelModels' && foreignKeyTables.has(sqlTableName.toLowerCase())
        methodImpl.isList = crudAction === 'list'
        methodImpl.isCreate = crudAction === 'create'
        methodImpl.isRead = crudAction === 'read'
        methodImpl.isUpdate = crudAction === 'update'
        methodImpl.isDelete = crudAction === 'delete'
        methodImpl.isCrud = crudAction !== 'custom'
        methodImpl.primaryKey = getPathParameterName(pathKey, operation)
        methodImpl.primaryKeyModelField = methodImpl.primaryKey
          ? toLowerCamelCase(methodImpl.primaryKey)
          : null
        routeDefs.push({
          operationId,
          httpMethod,
          path: routePath,
          hasInput,
          routeOptions: `{ config: ${JSON.stringify(routeConfig)} }, `,
        })
      }
    }

    if (!routesOnly) {
      const sharedTypesImportPath = methodImpls.some(method => method.isList)
        ? ensurePaginatedResponseType(baseDir, parentDir)
        : ''
      generateController(modulePascal, schemas, methodSignatures, parentDir, sharedTypesImportPath)

      if (!skipService) {
        generateService(modulePascal, schemas, methodImpls, parentDir, sharedTypesImportPath)
      }
    }

    // Generate router
    const parentModule = getRouteGroup(baseDir, parentDir)
    const moduleRoutesDir = parentModule ? path.join(routesOutDir, parentModule) : routesOutDir
    const serviceImportPath = toImportPath(moduleRoutesDir, path.join(parentDir, `${modulePascal}Service`))
    generateRouter(moduleName, modulePascal, routeDefs, moduleRoutesDir, serviceImportPath)
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

  const routeImports: string[] = []
  const registerLines: string[] = []
  const routerFiles = discoverRouterFiles(routesOutDir)
  const routeModuleCounts = new Map<string, number>()
  for (const file of routerFiles) {
    const name = path.basename(file, '.router.ts')
    routeModuleCounts.set(name, (routeModuleCounts.get(name) ?? 0) + 1)
  }
  for (const routerFile of routerFiles) {
    const routeModule = path.basename(routerFile, '.router.ts')
    const routeGroup = path.relative(routesOutDir, path.dirname(routerFile)).replace(/\\/g, '/')
    const importName = routeModuleCounts.get(routeModule)! > 1
      ? `${routeGroup.replace(/\//g, '_')}_${routeModule}`
      : routeModule
    const routePascal = toPascalCase(importName)
    const importPath = toImportPath(routesOutDir, routerFile.replace(/\.ts$/, ''))
    routeImports.push(`import ${routePascal}Routes from '${importPath}'`)
    registerLines.push(`  await app.register(${routePascal}Routes)`)
  }

  const indexOut =
    `${routeImports.join('\n')}\n\n` +
    `import type { FastifyInstance } from 'fastify'\n\n` +
    `export default async function registerRoutes(app: FastifyInstance) {\n` +
    `${registerLines.join('\n')}\n` +
    `}\n`;

  fs.writeFileSync(path.join(routesOutDir, 'index.ts'), indexOut, 'utf8');
  const generatedParts = routesOnly
    ? 'routes'
    : skipService ? 'types, controllers, and routes' : 'types, controllers, services, and routes'
  console.log(`OpenAPI ${generatedParts} generated successfully`)
}

const args = process.argv.slice(2);
let outDir: string | undefined;
let moduleFilter: string | undefined;
let specDir: string | undefined;
let skipService = false;
let dryRun = false;
let routesOnly = false;

for (let i = 0; i < args.length; i++) {
  const arg = args[i]
  if (arg === '--module') moduleFilter = args[++i]
  else if (arg === '--spec-dir') specDir = args[++i]
  else if (arg === '--out') outDir = args[++i]
  else if (arg === '--skip-service') skipService = true
  else if (arg === '--dry-run') dryRun = true
  else if (arg === '--routes-only') routesOnly = true
  else if (arg === '--help' || arg === '-h') {
    console.log(`Usage:
  npm run openapi:gen
  npm run openapi:gen -- --out services/school_service
  npm run openapi:gen -- --out services/school_service --module org_building
  npm run openapi:gen -- --out services/school_service --spec-dir services/school_service/src/services/org/org_building/api
  npm run openapi:gen -- --out services/school_service --routes-only

Options:
  --out <dir>       Generate in one service directory (default: discover all services)
  --module <name>   Generate one module by spec filename/module name
  --spec-dir <dir>  Discover specs only inside this folder
  --skip-service    Skip service implementation generation
  --routes-only     Generate routers and the root route index only
  --dry-run         List matched specs without writing files
`)
    process.exit(0)
  } else {
    console.error(`Unknown option: ${arg}`)
    process.exit(1)
  }
}

if (moduleFilter && specDir) {
  console.error('Use either --module or --spec-dir, not both')
  process.exit(1)
}

if (!outDir) console.log('No --out provided; scanning services/* for OpenAPI specs')

writeGeneratorFiles(outDir, moduleFilter, specDir, skipService, dryRun, routesOnly)
