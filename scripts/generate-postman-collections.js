const fs = require('node:fs')
const path = require('node:path')
const YAML = require('yaml')

const root = path.resolve(__dirname, '..')
const outputDir = path.join(root, 'postman')

function filesUnder(dir, suffix) {
  const result = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) result.push(...filesUnder(full, suffix))
    else if (entry.name.endsWith(suffix)) result.push(full)
  }
  return result
}

function exampleForSchema(schema, spec, seen = new Set()) {
  if (!schema) return null
  if (schema.example !== undefined) return schema.example
  if (schema.default !== undefined) return schema.default
  if (schema.enum?.length) return schema.enum[0]
  if (schema.$ref) {
    const ref = schema.$ref.split('/').pop()
    if (!ref || seen.has(ref)) return {}
    const next = spec.components?.schemas?.[ref]
    return exampleForSchema(next, spec, new Set([...seen, ref]))
  }
  if (schema.oneOf?.length) return exampleForSchema(schema.oneOf[0], spec, seen)
  if (schema.anyOf?.length) return exampleForSchema(schema.anyOf[0], spec, seen)
  if (schema.type === 'object' || schema.properties) {
    const value = {}
    for (const [key, child] of Object.entries(schema.properties || {})) {
      if (!child || typeof child !== 'object' || child.readOnly) continue
      value[key] = exampleForSchema(child, spec, seen)
    }
    return value
  }
  if (schema.type === 'array') return []
  if (schema.type === 'integer' || schema.type === 'number') return 1
  if (schema.type === 'boolean') return true
  if (schema.format === 'uuid') return '00000000-0000-0000-0000-000000000001'
  if (schema.format === 'email') return 'admin@example.test'
  if (schema.format === 'date-time') return '2026-01-01T00:00:00.000Z'
  if (schema.format === 'date') return '2026-01-01'
  return 'string'
}

function operationFor(spec, routePath, method) {
  const openApiPath = routePath.replace(/:([A-Za-z0-9_]+)/g, '{$1}')
  return spec?.paths?.[routePath]?.[method.toLowerCase()]
    || spec?.paths?.[openApiPath]?.[method.toLowerCase()]
    || null
}

function loadSpecs(serviceDir) {
  const specs = new Map()
  for (const file of filesUnder(path.join(serviceDir, 'src'), '.openapi.yaml')) {
    const spec = YAML.parse(fs.readFileSync(file, 'utf8'))
    for (const routePath of Object.keys(spec.paths || {})) {
      for (const method of Object.keys(spec.paths[routePath])) {
        if (['get', 'post', 'put', 'patch', 'delete'].includes(method)) {
          specs.set(`${method}:${routePath}`, spec)
        }
      }
    }
  }
  return specs
}

function parseRoutes(serviceDir) {
  const routeFiles = filesUnder(path.join(serviceDir, 'src', 'routes'), '.router.ts')
  const routes = []
  for (const file of routeFiles) {
    const relative = path.relative(path.join(serviceDir, 'src', 'routes'), file).replaceAll('\\', '/')
    const group = path.dirname(relative) === '.' ? 'Core' : path.dirname(relative).split('/').map(capitalize).join(' / ')
    const source = fs.readFileSync(file, 'utf8')
    for (const line of source.split(/\r?\n/)) {
      const match = line.match(/app\.(get|post|put|patch|delete)\(\s*['"]([^'"]+)['"](.*)$/)
      if (!match) continue
      const [, method, routePath, rest] = match
      const config = {}
      const configMatch = rest.match(/config:\s*\{([^}]*)\}/)
      if (configMatch) {
        for (const pair of configMatch[1].matchAll(/([A-Za-z]+)\s*:\s*["']([^"']+)["']/g)) config[pair[1]] = pair[2]
      }
      routes.push({ method: method.toUpperCase(), routePath, group, source: relative, config })
    }
  }
  return routes.sort((a, b) => `${a.group}/${a.routePath}/${a.method}`.localeCompare(`${b.group}/${b.routePath}/${b.method}`))
}

function capitalize(value) { return value.charAt(0).toUpperCase() + value.slice(1) }

function postmanUrl(baseVar, routePath, operation) {
  const params = operation?.parameters || []
  const pathNames = new Set(params.filter((p) => p.in === 'path').map((p) => p.name))
  const converted = routePath.replace(/:([A-Za-z0-9_]+)/g, (_, name) => `{{${name}}}`)
  const path = converted.split('/').filter(Boolean)
  const query = params.filter((p) => p.in === 'query').map((p) => ({
    key: p.name,
    value: p.example ?? p.schema?.example ?? (p.schema?.type === 'integer' ? '1' : ''),
    disabled: !p.required,
    description: p.description || `${p.name} query parameter`,
  }))
  const variables = [...pathNames].map((name) => ({ key: name, value: name.endsWith('_id') || name === 'id' ? '{{resourceId}}' : name }))
  return {
    raw: `{{${baseVar}}}${converted}`,
    host: [`{{${baseVar}}}`],
    path,
    ...(query.length ? { query } : {}),
    ...(variables.length ? { variable: variables } : {}),
  }
}

function requestFor(route, spec, baseVar, serviceName) {
  const operation = operationFor(spec, route.routePath, route.method)
  const request = {
    method: route.method,
    header: [
      { key: 'Accept', value: 'application/json', type: 'text' },
      { key: 'Authorization', value: 'Bearer {{accessToken}}', type: 'text' },
      ...(serviceName === 'CRM Service' ? [
        { key: 'x-domain-app', value: '{{domainApp}}', type: 'text' },
        { key: 'x-domain-slug', value: '{{domainSlug}}', type: 'text' },
        { key: 'Host', value: '{{tenantHost}}', type: 'text' },
      ] : []),
      ...(serviceName === 'School Service' ? [
        { key: 'x-tenant-id', value: '{{tenantId}}', type: 'text' },
        { key: 'x-tenant-slug', value: '{{tenantSlug}}', type: 'text' },
        { key: 'Host', value: '{{tenantHost}}', type: 'text' },
      ] : []),
    ],
    url: postmanUrl(baseVar, route.routePath, operation),
    description: [operation?.summary, `Source: ${route.source}`, ...Object.entries(route.config).map(([k, v]) => `${k}: ${v}`)].filter(Boolean).join('\n'),
  }
  if (['POST', 'PUT', 'PATCH'].includes(route.method)) {
    const schema = operation?.requestBody?.content?.['application/json']?.schema
    if (schema) {
      request.header.push({ key: 'Content-Type', value: 'application/json', type: 'text' })
      request.body = { mode: 'raw', raw: JSON.stringify(exampleForSchema(schema, spec), null, 2), options: { raw: { language: 'json' } } }
    }
    if (!request.body && route.routePath === '/cpanel/organizations') {
      request.header.push({ key: 'Content-Type', value: 'application/json', type: 'text' })
      request.body = {
        mode: 'raw',
        raw: JSON.stringify({
          name: 'Demo CRM Organization',
          slug: 'demo-crm',
          schema_name: 'tenant_demo_crm',
          domain: 'demo-crm.localtest.me',
          db_name: 'cell-01/demo-crm',
          title: 'Demo CRM Organization',
          description: 'Postman onboarding example',
          api_endpoint: '{{baseUrl}}',
          web_endpoint: '{{baseUrl}}',
          images: [],
          config: {},
        }, null, 2),
        options: { raw: { language: 'json' } },
      }
    }
  }
  return { name: operation?.summary || `${route.method} ${route.routePath}`, request, response: [] }
}

function makeCollection(serviceName, serviceDir, baseUrl, extraVariables = []) {
  const specs = loadSpecs(serviceDir)
  const routes = parseRoutes(serviceDir)
  const groups = new Map()
  for (const route of routes) {
    const openApiPath = route.routePath.replace(/:([A-Za-z0-9_]+)/g, '{$1}')
    const spec = specs.get(`${route.method.toLowerCase()}:${route.routePath}`)
      || specs.get(`${route.method.toLowerCase()}:${openApiPath}`)
    if (!groups.has(route.group)) groups.set(route.group, [])
    if (serviceName === 'CRM Service' && route.routePath === '/auth/admin/login') continue
    groups.get(route.group).push(requestFor(route, spec, 'baseUrl', serviceName))
  }

  const items = []
  if (serviceName === 'CRM Service') {
    items.push({
      name: 'Authentication',
      item: [{
        name: 'Admin login',
        request: {
          method: 'POST',
          auth: { type: 'noauth' },
          header: [
            { key: 'Content-Type', value: 'application/json', type: 'text' },
            { key: 'Accept', value: 'application/json', type: 'text' },
            { key: 'x-domain-app', value: '{{domainApp}}', type: 'text' },
            { key: 'x-domain-slug', value: '{{domainSlug}}', type: 'text' },
            { key: 'Host', value: '{{tenantHost}}', type: 'text' },
          ],
          body: { mode: 'raw', raw: JSON.stringify({ email: '{{adminEmail}}', password: '{{adminPassword}}' }, null, 2), options: { raw: { language: 'json' } } },
          url: { raw: '{{baseUrl}}/auth/admin/login', host: ['{{baseUrl}}'], path: ['auth', 'admin', 'login'] },
        },
        event: [{ listen: 'test', script: { type: 'text/javascript', exec: [
          "const json = pm.response.json();",
          "if (json.accessToken) pm.collectionVariables.set('accessToken', json.accessToken);",
          "if (json.refreshToken) pm.collectionVariables.set('refreshToken', json.refreshToken);",
        ] } }],
        response: [],
      }],
    })
  }
  for (const [name, groupItems] of groups) items.push({ name, item: groupItems })

  return {
    info: {
      _postman_id: `${serviceName.toLowerCase().replaceAll(' ', '-')}-collection`,
      name: `${serviceName} - Complete API`,
      description: `Complete Postman collection generated from the registered Fastify routes and OpenAPI request schemas for ${serviceName}.`,
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
    },
    auth: { type: 'bearer', bearer: [{ key: 'token', value: '{{accessToken}}', type: 'string' }] },
    variable: [
      { key: 'baseUrl', value: baseUrl, type: 'string' },
      { key: 'accessToken', value: '', type: 'string' },
      { key: 'refreshToken', value: '', type: 'string' },
      { key: 'resourceId', value: '00000000-0000-0000-0000-000000000001', type: 'string' },
      ...extraVariables,
    ],
    item: items,
  }
}

fs.mkdirSync(outputDir, { recursive: true })
const crm = makeCollection('CRM Service', path.join(root, 'services', 'crm_service'), 'http://localhost:3001', [
  { key: 'tenantHost', value: 'local-crm.04partners.com', type: 'string' },
  { key: 'domainApp', value: 'crm', type: 'string' },
  { key: 'domainSlug', value: 'test_cpanel', type: 'string' },
  { key: 'adminEmail', value: 'admin@example.test', type: 'string' },
  { key: 'adminPassword', value: 'change-me', type: 'string' },
])
const school = makeCollection('School Service', path.join(root, 'services', 'school_service'), 'http://localhost:3010', [
  { key: 'tenantId', value: 'tenant-001', type: 'string' },
  { key: 'tenantSlug', value: 'demo', type: 'string' },
  { key: 'tenantHost', value: 'demo.localtest.me', type: 'string' },
])
fs.writeFileSync(path.join(outputDir, 'crm_service.postman_collection.json'), `${JSON.stringify(crm, null, 2)}\n`)
fs.writeFileSync(path.join(outputDir, 'school_service.postman_collection.json'), `${JSON.stringify(school, null, 2)}\n`)
console.log(`Generated ${crm.item.reduce((n, x) => n + (x.item?.length || 0), 0)} CRM requests`)
console.log(`Generated ${school.item.reduce((n, x) => n + (x.item?.length || 0), 0)} school requests`)
