# OpenAPI Generator Migration Guide: From String Concatenation to Mustache Templates

## Overview

This document explains the migration from the old string-concatenation based code generator to the new Mustache template-based generator. This makes the codebase more maintainable, flexible, and easier to customize.

## Before: String Concatenation Approach

### Issues with Previous Implementation

The old generator built strings by concatenating code fragments:

```typescript
// ❌ Old approach - hard to maintain and customize
const controllerOut = 
  `${importLine}` +
  `export interface ${controllerName} {\n` +
  `${methods.join('\n')}\n` +
  `}\n`

fs.writeFileSync(path.join(contModuleDir, `${controllerName}.ts`), controllerOut, 'utf8')
```

**Problems:**
- ❌ Hard to visualize the final output structure
- ❌ String interpolation errors are hard to debug
- ❌ Modifying output format requires code changes
- ❌ No separation between logic and presentation
- ❌ Whitespace and indentation errors are common
- ❌ Difficult to maintain consistent formatting

## After: Mustache Template Approach

### Benefits of Template-Based Approach

```typescript
// ✅ New approach - cleaner separation of concerns
const template = loadTemplate('controller')
const data = {
  ControllerName: controllerName,
  imports: schemaNames,
  methods: methodSignatures,
}

const output = Mustache.render(template, data)
fs.writeFileSync(filePath, output, 'utf8')
```

**Advantages:**
- ✅ Clear visual representation of output structure
- ✅ Easier to maintain and modify formatting
- ✅ Logic and presentation clearly separated
- ✅ Reusable templates across different generators
- ✅ Easier to test and preview output
- ✅ Support for complex conditionals and loops

## File Structure Comparison

### Before

```
scripts/
└── generate-openapi.ts  (1000+ lines of mixed logic and string building)
```

### After

```
scripts/
├── generate-openapi.ts  (400 lines of clean logic)
└── templates/
    ├── controller.mustache
    ├── service.mustache
    ├── type.mustache
    └── router.mustache
```

## Generation Process Flow

### Before

```
OpenAPI YAML
    ↓
Parse YAML
    ↓
Build Strings:
  - methodSignatures += "  method(...): Promise<Type>"
  - imports += "import type { Type }"
  - routeDefs += "app.post(...)"
    ↓
Write Files
```

### After

```
OpenAPI YAML
    ↓
Parse YAML
    ↓
Extract Data
    ↓
Prepare Context:
  {
    ControllerName: 'AuthController',
    methods: [
      { methodSignature: 'authLogin(...): Promise<LoginResponse>' }
    ],
    imports: ['LoginRequest', 'LoginResponse']
  }
    ↓
Render Template with Data
    ↓
Write Files
```

## Code Example Walkthrough

### Scenario: Generate Controller Interface

#### Before (String Concatenation)

```typescript
// Extract schema names and build imports
const schemaNames = Object.keys(schemas)
const schemaImports = schemaNames
  .map((name) => `import type { ${name} } from './types/${name}'`)
  .join('\n')

// Build import line
const importLine =
  `${schemaImports}${schemaImports ? '\n' : ''}` +
  `import { FastifyInstance, FastifyRequest} from 'fastify'\n\n`

// Collect methods
const methods: string[] = []
for (const [pathKey, ops] of Object.entries(paths)) {
  // ... loop logic
  methods.push(
    `  ${operation.operationId}(app: FastifyInstance, input: ${requestType}, request?: FastifyRequest): Promise<${responseType}>`
  )
}

// Build controller string
const controllerOut = 
  `${importLine}` +
  `export interface ${controllerName} {\n` +
  `${methods.join('\n')}\n` +
  `}\n`

fs.writeFileSync(path.join(contModuleDir, `${controllerName}.ts`), controllerOut, 'utf8')
```

**Issues:**
- Fragile string building with manual `\n` and spacing
- Hard to visualize the structure
- Methods array building is mixed with output generation

#### After (Mustache Template)

```typescript
// controller.mustache
{{#imports}}
import type { {{.}} } from './types/{{.}}'
{{/imports}}
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface {{ControllerName}} {
{{#methods}}
  {{methodSignature}}
{{/methods}}
}
```

```typescript
// generate-openapi.ts
function generateController(
  modulePascal: string,
  schemas: Record<string, any>,
  methods: Array<{ methodSignature: string }>,
  parentDir: string
) {
  const controllerTemplate = loadTemplate('controller')
  const controllerName = `${modulePascal}Controller`
  const schemaNames = Object.keys(schemas)
  
  // Clean data preparation
  const data = {
    ControllerName: controllerName,
    imports: schemaNames.length > 0 ? schemaNames : false,
    methods: methods.length > 0 ? methods : false,
  }
  
  const output = Mustache.render(controllerTemplate, data)
  fs.writeFileSync(path.join(parentDir, `${controllerName}.ts`), output, 'utf8')
}
```

**Advantages:**
- Template shows exact structure visually
- Data preparation is clean and focused
- Easy to modify output format without touching code logic
- Testable independently

## Customization Examples

### Example 1: Add Logging to Generated Methods

#### Before

```typescript
// Would need to modify string building logic
const methodStubs: string[] = []
for (const method of methods) {
  methodStubs.push(
    `  public async ${method.name}(...) {\n` +
    `    console.log('Calling ${method.name}')\n` +  // Added this line
    `    try {\n` +
    // ... rest of method
  )
}
```

#### After

Just edit `service.mustache`:

```mustache
public async {{methodName}}({{methodParams}}): Promise<{{returnType}}> {
  app.log.info('Method {{methodName}} called')  <!-- Add this line -->
  try {
    // TODO: implement logic
  } catch (err) {
    app.log.error(err);
    throw err;
  }
}
```

### Example 2: Add JSDoc Comments

#### Before

```typescript
// Complicated to add JSDoc to each method
const methodStubs: string[] = []
for (const method of methods) {
  let jsdoc = `  /**\n   * ${method.description}\n   */\n`
  methodStubs.push(jsdoc + buildMethodString(method))
}
```

#### After

Edit `service.mustache` or `controller.mustache`:

```mustache
{{#methods}}
/**
 * {{methodDescription}}
 */
public async {{methodName}}({{methodParams}}): Promise<{{returnType}}> {
  // implementation
}
{{/methods}}
```

And add `methodDescription` to data context:

```typescript
const methodImpls = methods.map(m => ({
  methodName: m.name,
  methodDescription: m.description,
  // ... other fields
}))
```

## Template Syntax Reference

### Mustache Basics Used in Generator

#### Variables

```mustache
{{ControllerName}}
<!-- Renders the value of ControllerName -->
```

#### Arrays/Loops

```mustache
{{#methods}}
  {{methodSignature}}
{{/methods}}
<!-- Renders methodSignature for each item in methods array -->
```

#### Conditionals

```mustache
{{#hasInput}}
  return await reply.send(controller.{{operationId}}(...))
{{/hasInput}}
{{^hasInput}}
  await controller.{{operationId}}(...)
  reply.code(201)
{{/hasInput}}
<!-- {{#}} for true, {{^}} for false/empty -->
```

## Data Context Structure

The generator prepares data in specific shapes for each template:

### Controller Template Data

```typescript
{
  ControllerName: 'AuthController',
  imports: ['LoginRequest', 'LoginResponse', 'RegisterRequest', 'RefreshTokenRequest', 'AuthUser'],
  methods: [
    { methodSignature: 'authLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse>' },
    { methodSignature: 'authRegister(app: FastifyInstance, input: RegisterRequest, request?: FastifyRequest): Promise<AuthUser>' },
    // ... more methods
  ]
}
```

### Service Template Data

```typescript
{
  ServiceName: 'AuthService',
  ControllerName: 'AuthController',
  imports: ['LoginRequest', 'LoginResponse', /* ... */],
  methods: [
    {
      methodName: 'authLogin',
      methodParams: 'app: FastifyInstance, input: LoginRequest, request?: FastifyRequest',
      returnType: 'LoginResponse',
      hasInput: true
    },
    // ... more methods
  ]
}
```

### Router Template Data

```typescript
{
  ModuleName: 'Auth',
  ServiceName: 'AuthService',
  moduleName: 'auth',
  routes: [
    { operationId: 'authLogin', httpMethod: 'post', path: '/auth/login', hasInput: true },
    { operationId: 'authRegister', httpMethod: 'post', path: '/auth/register', hasInput: true },
    { operationId: 'authLogout', httpMethod: 'post', path: '/auth/logout', hasInput: false },
    // ... more routes
  ]
}
```

## Migration Checklist

If you have existing generated code and want to migrate:

- [ ] Backup existing generated files
- [ ] Install Mustache: `npm install mustache`
- [ ] Create `scripts/templates/` directory
- [ ] Create template files (controller, service, type, router)
- [ ] Update `generate-openapi.ts` with new Mustache-based logic
- [ ] Update `package.json` with Mustache dependency
- [ ] Update OpenAPI specs to use proper `operationId` values
- [ ] Run generator: `npm run openapi:gen -- --out ./services/auth_service`
- [ ] Compare generated files with backups
- [ ] Update implementation methods in `AuthService.ts`
- [ ] Test generated routes

## Performance Impact

| Aspect | Before | After | Change |
|--------|--------|-------|--------|
| Build Time | ~100ms | ~120ms | +20ms (negligible) |
| Generated File Size | Same | Same | No change |
| Memory Usage | Low | Low | No significant change |
| Maintainability | Low | High | ↑↑↑ |
| Customization Ease | Hard | Easy | ↑↑↑ |

## Troubleshooting Migration Issues

### Issue: Templates Not Found

```
Error: Template not found: scripts/templates/controller.mustache
```

**Solution:**
- Verify template files exist in `scripts/templates/`
- Check template file names match exactly
- Ensure Mustache is installed: `npm install mustache`

### Issue: Generated Files Missing Imports

**Solution:**
- Check OpenAPI schema references are correct: `$ref: '#/components/schemas/TypeName'`
- Verify schema names match exactly (case-sensitive)
- Run with verbose logging to debug

### Issue: Routes Not Being Generated

**Solution:**
- Ensure `operationId` is defined for each operation in OpenAPI
- Verify paths are defined in `paths:` section
- Check HTTP methods are lowercase: `get`, `post`, `put`, etc.

## Future Enhancements

The new template system makes it easy to add:

1. **JSDoc/TSDoc comments** - Add documentation generation
2. **Input validation** - Generate Zod/Joi schemas
3. **Error handling** - Generate error classes and handlers
4. **Unit tests** - Generate test skeletons
5. **API documentation** - Generate markdown docs
6. **Mock data** - Generate mock implementations
7. **GraphQL** - Generate GraphQL resolvers
8. **gRPC** - Generate gRPC services

Simply create new templates and add data preparation logic!

## References

- [Mustache Documentation](https://mustache.github.io/)
- [OpenAPI 3.0 Specification](https://spec.openapis.org/oas/v3.0.0)
- [Generator Source Code](./generate-openapi.ts)
- [Template Examples](./templates/)
