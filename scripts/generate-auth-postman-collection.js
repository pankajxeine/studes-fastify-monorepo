#!/usr/bin/env node

const fs = require('node:fs')
const path = require('node:path')
const YAML = require('yaml')

const root = path.resolve(__dirname, '..')
const routesDir = path.join(root, 'services/auth_service/src/routes')
const servicesDir = path.join(root, 'services/auth_service/src/services')
const outputPath = path.join(root, 'postman/Auth_Service_All_Routes.postman_collection.json')

function walk(directory) {
  if (!fs.existsSync(directory)) return []
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(filePath) : [filePath]
  })
}

function humanize(value) {
  return value
    .replace(/\.router\.ts$/, '')
    .split(/[_-]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function normalizeOpenApiPath(routePath) {
  return routePath.replace(/:([A-Za-z0-9_]+)\??/g, '{$1}')
}

function sampleValue(schema, propertyName = '') {
  if (!schema || typeof schema !== 'object') return 'string'
  if (schema.example !== undefined) return schema.example
  if (schema.default !== undefined) return schema.default
  if (Array.isArray(schema.enum) && schema.enum.length) return schema.enum[0]
  if (schema.$ref) return `{{${propertyName || 'value'}}}`

  switch (schema.type) {
    case 'integer': return 1
    case 'number': return 1
    case 'boolean': return true
    case 'array': return []
    case 'object': {
      const object = {}
      for (const [key, value] of Object.entries(schema.properties || {})) {
        object[key] = sampleValue(value, key)
      }
      return object
    }
    case 'string':
    default:
      if (schema.format === 'email') return 'user@example.test'
      if (schema.format === 'date-time') return '2026-01-01T00:00:00.000Z'
      if (schema.format === 'date') return '2026-01-01'
      if (schema.format === 'uuid') return '00000000-0000-4000-8000-000000000001'
      if (/password|token|secret/i.test(propertyName)) return 'change-me'
      if (/email/i.test(propertyName)) return 'user@example.test'
      return 'string'
  }
}

function resolveSchema(schema, schemas) {
  let current = schema
  const visited = new Set()
  while (current?.$ref) {
    const name = current.$ref.split('/').at(-1)
    if (visited.has(name)) return {}
    visited.add(name)
    current = schemas[name]
  }
  return current || {}
}

function makeBody(operation, spec, routePath) {
  const schemas = spec?.components?.schemas || {}
  let schema = operation?.requestBody?.content?.['application/json']?.schema
  if (schema) schema = resolveSchema(schema, schemas)

  if (!schema && routePath === '/auth/login') {
    return { username: '{{username}}', password: '{{password}}', audience: 'admin' }
  }
  if (!schema && routePath === '/auth/refresh') {
    return { refreshToken: '{{refreshToken}}' }
  }
  if (!schema && routePath === '/auth/register') {
    return {
      username: '{{username}}',
      email: '{{email}}',
      password: '{{password}}',
      first_name: 'Demo',
      last_name: 'User',
    }
  }
  if (!schema || schema.type !== 'object') return {}

  const body = {}
  for (const [key, value] of Object.entries(schema.properties || {})) {
    body[key] = sampleValue(resolveSchema(value, schemas), key)
  }
  return body
}

function sampleParameter(parameter) {
  const schema = parameter.schema || {}
  const name = parameter.name || 'value'
  if (/id$/i.test(name)) return '1'
  return String(sampleValue(schema, name))
}

function makeUrl(routePath, operation, requestName) {
  const routeVariables = []
  const pathSegments = routePath.split('/').filter(Boolean).map((segment) => {
    const match = segment.match(/^:([A-Za-z0-9_]+)(\?)?$/)
    if (!match) return segment
    const [, key] = match
    routeVariables.push({ key, value: key.toLowerCase() === 'id' ? '1' : 'example' })
    return `:${key}`
  })

  const queryDefinitions = (operation?.parameters || [])
    .filter((parameter) => parameter.in === 'query')
    .map((parameter) => ({
      key: parameter.name,
      value: sampleParameter(parameter),
      description: parameter.description || undefined,
      disabled: parameter.required !== true,
    }))

  const queryString = queryDefinitions
    .filter((parameter) => !parameter.disabled)
    .map((parameter) => `${encodeURIComponent(parameter.key)}=${encodeURIComponent(parameter.value)}`)
    .join('&')
  const rawPath = `{{baseUrl}}/${pathSegments.join('/')}`
  const raw = queryString ? `${rawPath}?${queryString}` : rawPath

  return {
    raw,
    host: ['{{baseUrl}}'],
    path: pathSegments,
    ...(queryDefinitions.length ? { query: queryDefinitions } : {}),
    ...(routeVariables.length ? { variable: routeVariables } : {}),
    description: `Request generated from ${requestName}`,
  }
}

function routeDefinitions(source, fileName) {
  const routePattern = /\bapp\.(get|post|put|patch|delete|options|head)\(\s*(['"`])([^'"`]+)\2/g
  const definitions = []
  for (const match of source.matchAll(routePattern)) {
    const start = match.index
    const nextRoute = source.indexOf('\n  app.', start + match[0].length)
    const snippet = source.slice(start, nextRoute < 0 ? source.length : nextRoute)
    const pathEnd = match.index + match[0].length
    const handlerStart = source.indexOf('async (request, reply)', pathEnd)
    const routeOptions = handlerStart < 0
      ? snippet
      : source.slice(pathEnd, handlerStart)
    definitions.push({
      method: match[1].toUpperCase(),
      path: match[3],
      isPublic: /isPublic\s*:\s*true/.test(routeOptions),
      router: fileName,
      source: snippet,
    })
  }
  return definitions
}

function makeRequest(route, spec) {
  const openApiPath = normalizeOpenApiPath(route.path)
  const operation = spec?.paths?.[openApiPath]?.[route.method.toLowerCase()]
  const request = {
    method: route.method,
    header: [{
      key: 'Authorization',
      value: 'Bearer {{accessToken}}',
      type: 'text',
    }],
    url: makeUrl(route.path, operation, route.router),
    description: operation?.summary || `${route.method} ${route.path}`,
  }

  const hasBody = Boolean(operation?.requestBody) || /request\.body/.test(route.source)
  if (hasBody && !['GET', 'HEAD'].includes(route.method)) {
    request.header.push({ key: 'Content-Type', value: 'application/json', type: 'text' })
    request.body = {
      mode: 'raw',
      raw: JSON.stringify(makeBody(operation, spec, route.path), null, 2),
      options: { raw: { language: 'json' } },
    }
  }

  return {
    name: operation?.summary || `${route.method} ${route.path}`,
    request,
    response: [],
    ...(route.isPublic ? { auth: { type: 'noauth' } } : {}),
  }
}

const specsByBaseName = new Map()
for (const filePath of walk(servicesDir).filter((file) => file.endsWith('.openapi.yaml') || file.endsWith('.openapi.yml'))) {
  const spec = YAML.parse(fs.readFileSync(filePath, 'utf8'))
  specsByBaseName.set(path.basename(filePath).replace(/\.openapi\.ya?ml$/, ''), spec)
}

const routeFiles = fs.readdirSync(routesDir)
  .filter((file) => file.endsWith('.router.ts'))
  .sort((a, b) => a.localeCompare(b))

const folders = []
let routeCount = 0
for (const routeFile of routeFiles) {
  const baseName = routeFile.replace(/\.router\.ts$/, '')
  const source = fs.readFileSync(path.join(routesDir, routeFile), 'utf8')
  const routes = routeDefinitions(source, routeFile)
  if (!routes.length) continue
  const spec = specsByBaseName.get(baseName)
  const items = routes.map((route) => makeRequest(route, spec))
  routeCount += items.length
  folders.push({
    name: humanize(routeFile),
    description: spec?.info?.description || `Routes registered by ${routeFile}.`,
    item: items,
  })
}

const collection = {
  info: {
    _postman_id: 'studes-auth-service-all-routes',
    name: 'Studes Auth Service - All Routes',
    description: 'Requests for every route registered by services/auth_service/src/routes. Route methods and paths come from Fastify router registrations; request examples and query parameters use matching OpenAPI specs when available. Set collection variables for baseUrl, accessToken, tenantId, username and password before use.',
    schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
  },
  item: folders,
  variable: [
    { key: 'baseUrl', value: 'http://localhost:3001', type: 'string' },
    { key: 'accessToken', value: '', type: 'string' },
    { key: 'refreshToken', value: '', type: 'string' },
    { key: 'tenantId', value: 'tenant-001', type: 'string' },
    { key: 'tenantSlug', value: 'demo', type: 'string' },
    { key: 'username', value: 'demo_user', type: 'string' },
    { key: 'email', value: 'user@example.test', type: 'string' },
    { key: 'password', value: 'change-me', type: 'string' },
  ],
}

const loginRequest = folders
  .find((folder) => folder.name === 'Auth')
  ?.item.find((item) => item.request.url.raw.endsWith('/auth/login'))
if (loginRequest) {
  loginRequest.event = [{
    listen: 'test',
    script: {
      type: 'text/javascript',
      exec: [
        'pm.test("Login returns success", function () { pm.expect(pm.response.code).to.be.oneOf([200, 201]); });',
        'if (pm.response.code >= 200 && pm.response.code < 300) {',
        '  const response = pm.response.json();',
        '  const body = response.data || response;',
        '  if (body.accessToken) pm.collectionVariables.set("accessToken", body.accessToken);',
        '  if (body.refreshToken) pm.collectionVariables.set("refreshToken", body.refreshToken);',
        '}',
      ],
    },
  }]
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, `${JSON.stringify(collection, null, 2)}\n`)
console.log(`Wrote ${routeCount} requests from ${routeFiles.length} router files to ${path.relative(root, outputPath)}`)
