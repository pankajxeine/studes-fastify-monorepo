# OpenAPI Code Generator with Mustache Templates

This guide explains how to use the updated OpenAPI code generator that uses Mustache templating to generate TypeScript services, controllers, types, and routes.

## Overview

The generator automatically creates:
1. **Types** - TypeScript type definitions from OpenAPI schemas
2. **Controllers** - Interface definitions for service methods
3. **Services** - Implementation stubs for service methods
4. **Routers** - Fastify route handlers

## Setup

### 1. Install Dependencies

```bash
npm install
```

This installs Mustache and other required dependencies.

### 2. Create OpenAPI Specification

Create an `openapi.yaml` file in your service's `openapi` directory:

```
services/
├── auth_service/
│   ├── openapi/
│   │   └── openapi.yaml
│   ├── src/
│   │   ├── services/
│   │   └── routes/
│   └── ...
```

### 3. Define Your OpenAPI Spec

Example `openapi.yaml`:

```yaml
openapi: 3.0.0
info:
  title: Auth Service API
  version: 1.0.0

paths:
  /auth/login:
    post:
      operationId: authLogin
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LoginRequest'
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LoginResponse'

components:
  schemas:
    LoginRequest:
      type: object
      required:
        - email
        - password
      properties:
        email:
          type: string
        password:
          type: string

    LoginResponse:
      type: object
      required:
        - token
      properties:
        token:
          type: string
```

## Usage

### Generate Code

To generate types, controllers, and routes:

```bash
npm run openapi:gen -- --out ./services/auth_service
```

This will generate:
- `src/services/auth/types/*.ts` - Type definitions
- `src/services/auth/AuthController.ts` - Controller interface
- `src/routes/auth.router.ts` - Route handlers

### Generate Service Implementation

To also generate service implementation stubs:

```bash
npm run openapi:gen -- --out ./services/auth_service --generate-service
```

This additionally generates:
- `src/services/auth/AuthService.ts` - Service implementation with TODO stubs

## Generated File Structure

### Types (`src/services/<module>/types/<TypeName>.ts`)

```typescript
import type { OtherType } from './OtherType'

export type LoginRequest = 
{
  email: string
  password: string
}
```

### Controller (`src/services/<module>/<ModuleName>Controller.ts`)

```typescript
import type { LoginRequest } from './types/LoginRequest'
import type { LoginResponse } from './types/LoginResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface AuthController {
  authLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse>
  authRegister(app: FastifyInstance, input: RegisterRequest, request?: FastifyRequest): Promise<AuthUser>
}
```

### Service (`src/services/<module>/<ModuleName>Service.ts`)

```typescript
import type { LoginRequest } from './types/LoginRequest'
import type { LoginResponse } from './types/LoginResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AuthController } from './AuthController'

export class AuthService implements AuthController {
  public async authLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async authRegister(app: FastifyInstance, input: RegisterRequest, request?: FastifyRequest): Promise<AuthUser> {
    // ...
  }
}
```

### Router (`src/routes/<module>.router.ts`)

```typescript
import type { FastifyPluginAsync } from 'fastify'
import { AuthService } from '../services/auth/AuthService'

const AuthRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AuthService()

  app.post('/auth/login', async (request, reply) => {
    return await reply.send(controller.authLogin(app, request.body as any, request))
  })

  app.post('/auth/register', async (request, reply) => {
    return await reply.send(controller.authRegister(app, request.body as any, request))
  })

  app.post('/auth/logout', async (request, reply) => {
    await controller.authLogout(app, request)
    reply.code(201)
  })
}

export default AuthRoutes
```

## Template Files

The generator uses Mustache templates located in `scripts/templates/`:

### `controller.mustache`

Defines the interface structure for controllers:
- Imports types from schemas
- Generates method signatures

### `service.mustache`

Defines the service implementation structure:
- Implements the controller interface
- Generates TODO method stubs
- Includes error handling boilerplate

### `type.mustache`

Defines the type definition structure:
- Converts OpenAPI schemas to TypeScript types
- Handles nested types and references

### `router.mustache`

Defines the Fastify route structure:
- Creates route handlers for each endpoint
- Handles request/response mapping
- Generates proper HTTP method calls

## Customization

### Modify Templates

Edit template files in `scripts/templates/` to customize generated code:

```bash
scripts/templates/
├── controller.mustache
├── service.mustache
├── type.mustache
└── router.mustache
```

Example: Add logging to generated methods by editing `service.mustache`:

```mustache
public async {{methodName}}({{methodParams}}): Promise<{{returnType}}> {
  app.log.info('Calling {{methodName}}')
  try {
    // TODO: implement logic
    void input;
    void request;
    throw new Error('Not implemented');
  } catch (err) {
    app.log.error(err);
    throw err;
  }
}
```

### Create New Schemas

Add more schemas to `components.schemas` in your OpenAPI spec:

```yaml
components:
  schemas:
    NewType:
      type: object
      required:
        - field1
      properties:
        field1:
          type: string
        field2:
          type: number
          nullable: true
```

## TypeScript Type Mapping

The generator converts OpenAPI types to TypeScript:

| OpenAPI Type | TypeScript Type |
|--------------|-----------------|
| `string` | `string` |
| `number` | `number` |
| `integer` | `number` |
| `boolean` | `boolean` |
| `array` | `T[]` |
| `object` | `{ ... }` |
| `$ref: '#/components/schemas/Type'` | `Type` |

### Type Composition

The generator also handles OpenAPI composition:

| OpenAPI | Result |
|---------|--------|
| `oneOf: [Type1, Type2]` | `Type1 \| Type2` |
| `anyOf: [Type1, Type2]` | `Type1 \| Type2` |
| `allOf: [Type1, Type2]` | `Type1 & Type2` |

## Workflow Example

### 1. Define OpenAPI Spec

```bash
# Edit services/auth_service/openapi/openapi.yaml
```

### 2. Generate Code

```bash
npm run openapi:gen -- --out ./services/auth_service --generate-service
```

### 3. Implement Methods

Edit `src/services/auth/AuthService.ts` and replace TODO stubs with actual logic

### 4. Update Tests

Update route tests in `src/routes/auth.router.ts` if needed

### 5. Register Routes

Routes are automatically registered in `src/routes/index.ts`

## Tips and Best Practices

### 1. Use Semantic Operation IDs

```yaml
paths:
  /auth/login:
    post:
      operationId: authLogin  # ✅ Good - descriptive
```

```yaml
paths:
  /auth/login:
    post:
      operationId: post  # ❌ Bad - not descriptive
```

### 2. Define All Schemas

```yaml
components:
  schemas:
    # Always define input and output types
    LoginRequest:
      type: object
      properties: { ... }
    
    LoginResponse:
      type: object
      properties: { ... }
```

### 3. Use References

```yaml
paths:
  /auth/login:
    post:
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LoginRequest'  # ✅ Good
```

### 4. Document Response Codes

```yaml
responses:
  '200':
    description: Success
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/LoginResponse'
  '400':
    description: Invalid input
  '401':
    description: Unauthorized
```

## Troubleshooting

### Template Not Found

Error: `Template not found: scripts/templates/controller.mustache`

**Solution**: Ensure all template files exist in `scripts/templates/`

### No Schemas Generated

**Check**: 
1. OpenAPI file exists at `services/auth_service/openapi/openapi.yaml`
2. `components.schemas` section is defined in YAML
3. Use `npm run openapi:gen -- --out ./services/auth_service`

### Routes Not Registered

**Check**:
1. Ensure `--generate-service` flag is used to generate service implementations
2. `src/routes/index.ts` should import and register routes
3. Routes are registered in `src/app.ts` with `registerRoutes(app)`

### Type Imports Missing

The generator automatically:
- Detects schema references
- Imports referenced types
- Removes self-references

Ensure all referenced schemas are defined in `components.schemas`

## Advanced Usage

### Multiple Services

Run generator for each service:

```bash
npm run openapi:gen -- --out ./services/auth_service --generate-service
npm run openapi:gen -- --out ./services/billing_service --generate-service
npm run openapi:gen -- --out ./services/notification_service --generate-service
```

### Custom Template Variables

Edit `generate-openapi.ts` to pass custom data to templates:

```typescript
const data = {
  ControllerName: controllerName,
  imports: schemaNames,
  methods: methodSignatures,
  customVariable: 'value'  // Add custom variables
}
```

Then use in templates:

```mustache
// In controller.mustache
{{#customVariable}}
  // Custom logic here
{{/customVariable}}
```

## References

- [OpenAPI Specification](https://spec.openapis.org/oas/v3.0.0)
- [Mustache Manual](https://mustache.github.io/mustache.5.html)
- [Fastify Documentation](https://www.fastify.io/)
