# Quick Start: OpenAPI-Driven Development with Mustache Templates

This guide shows how to quickly generate a complete service (services, controllers, types, routes) from an OpenAPI specification using the new Mustache template-based generator.

## 5-Minute Quick Start

### Step 1: Create OpenAPI Specification

Create `services/auth_service/openapi/openapi.yaml`:

```yaml
openapi: 3.0.0
info:
  title: Auth Service
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
        - accessToken
      properties:
        accessToken:
          type: string
```

### Step 2: Run Generator

```bash
npm run openapi:gen -- --out ./services/auth_service --generate-service
```

### Step 3: Generated Files

The generator creates:

```
services/auth_service/
├── src/
│   ├── services/
│   │   └── auth/
│   │       ├── types/
│   │       │   ├── LoginRequest.ts
│   │       │   └── LoginResponse.ts
│   │       ├── AuthController.ts        (interface)
│   │       └── AuthService.ts           (implementation stubs)
│   └── routes/
│       └── auth.router.ts               (Fastify routes)
└── openapi/
    └── openapi.yaml
```

### Step 4: Implement Service Logic

Edit `src/services/auth/AuthService.ts`:

```typescript
public async authLogin(
  app: FastifyInstance,
  input: LoginRequest,
  request?: FastifyRequest
): Promise<LoginResponse> {
  // Replace TODO with actual implementation
  const user = await this.findUserByEmail(input.email)
  if (!user || !this.verifyPassword(input.password, user.password)) {
    throw new UnauthorizedError('Invalid credentials')
  }
  
  const accessToken = this.generateToken(user)
  return { accessToken }
}
```

### Step 5: Test

```bash
npm run dev:auth
```

```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

## Project Structure

```
root/
├── scripts/
│   ├── generate-openapi.ts            ← Main generator
│   ├── generate-auth-service.js       ← Helper for auth service
│   └── templates/
│       ├── controller.mustache        ← Controller interface template
│       ├── service.mustache           ← Service implementation template
│       ├── type.mustache              ← Type definition template
│       └── router.mustache            ← Router/routes template
├── services/
│   ├── auth_service/
│   │   ├── openapi/
│   │   │   └── openapi.yaml           ← Define your API here
│   │   ├── src/
│   │   │   ├── services/auth/
│   │   │   │   ├── types/             ← Generated types
│   │   │   │   ├── AuthController.ts  ← Generated interface
│   │   │   │   └── AuthService.ts     ← Generated + implement here
│   │   │   └── routes/
│   │   │       └── auth.router.ts     ← Generated routes
│   │   └── package.json
│   └── ... other services
├── OPENAPI_GENERATOR.md               ← Full documentation
└── MIGRATION_GUIDE.md                 ← Before/after explanation
```

## Common Workflows

### Workflow 1: Add New Endpoint

1. **Edit OpenAPI Spec**

```yaml
paths:
  /auth/refresh:
    post:
      operationId: authRefresh
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/RefreshTokenRequest'
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LoginResponse'

components:
  schemas:
    RefreshTokenRequest:
      type: object
      required:
        - refreshToken
      properties:
        refreshToken:
          type: string
```

2. **Regenerate Code**

```bash
npm run openapi:gen -- --out ./services/auth_service --generate-service
```

3. **Implement New Method**

```typescript
public async authRefresh(
  app: FastifyInstance,
  input: RefreshTokenRequest,
  request?: FastifyRequest
): Promise<LoginResponse> {
  // Implement token refresh logic
}
```

### Workflow 2: Add New Type/Schema

1. **Add to OpenAPI Schemas**

```yaml
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
        email:
          type: string
        name:
          type: string
    
    UserListResponse:
      type: object
      properties:
        users:
          type: array
          items:
            $ref: '#/components/schemas/User'
```

2. **Regenerate**

```bash
npm run openapi:gen -- --out ./services/auth_service
```

New types automatically appear in `src/services/auth/types/`

### Workflow 3: Update Response Format

1. **Edit OpenAPI Response Schema**

```yaml
paths:
  /auth/login:
    post:
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LoginResponse'

components:
  schemas:
    LoginResponse:
      type: object
      properties:
        accessToken:
          type: string
        refreshToken:
          type: string    # ← Added this
        user:             # ← Added this
          $ref: '#/components/schemas/User'
```

2. **Regenerate Types**

```bash
npm run openapi:gen -- --out ./services/auth_service
```

3. **Update Implementation**

The controller interface now shows the new signature:

```typescript
authLogin(...): Promise<LoginResponse>  // Updated type definition

// LoginResponse now includes refreshToken and user
```

## Command Reference

### Generate All (types + controller + routes)

```bash
npm run openapi:gen -- --out ./services/auth_service
```

### Generate All + Service Implementation

```bash
npm run openapi:gen -- --out ./services/auth_service --generate-service
```

### Generate Specific Service (Auth)

```bash
npm run openapi:gen -- --out ./services/auth_service --generate-service
```

### Generate Multiple Services

```bash
# Sequential generation
npm run openapi:gen -- --out ./services/auth_service --generate-service
npm run openapi:gen -- --out ./services/billing_service --generate-service
npm run openapi:gen -- --out ./services/notification_service --generate-service
```

## Template Customization

### Example: Add Class Decorators

Edit `service.mustache`:

```mustache
{{#imports}}
import type { {{.}} } from './types/{{.}}'
{{/imports}}
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { {{ControllerName}} } from './{{ControllerName}}'
import { Service } from '../../core/decorators'

@Service('{{ServiceName}}')  <!-- Add this decorator -->
export class {{ServiceName}} implements {{ControllerName}} {
  // ... methods
}
```

### Example: Add Error Handling Wrapper

Edit `service.mustache`:

```mustache
public async {{methodName}}({{methodParams}}): Promise<{{returnType}}> {
  const startTime = Date.now()
  try {
    app.log.debug('Starting {{methodName}}')
    // TODO: implement logic
    throw new Error('Not implemented')
  } catch (err) {
    const duration = Date.now() - startTime
    app.log.error({ err, duration }, '{{methodName}} failed')
    throw err
  } finally {
    const duration = Date.now() - startTime
    app.log.debug({ duration }, '{{methodName}} completed')
  }
}
```

## OpenAPI Best Practices

### ✅ DO: Use Descriptive Operation IDs

```yaml
paths:
  /auth/login:
    post:
      operationId: authLogin        # ✅ Clear and descriptive
```

### ❌ DON'T: Use Generic Operation IDs

```yaml
paths:
  /auth/login:
    post:
      operationId: post            # ❌ Too generic
```

### ✅ DO: Define All Request/Response Schemas

```yaml
paths:
  /auth/login:
    post:
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LoginRequest'
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LoginResponse'
```

### ❌ DON'T: Use Inline Schemas

```yaml
paths:
  /auth/login:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: object           # ❌ Hard to reuse
              properties:
                email: {}
```

### ✅ DO: Use Schema Composition

```yaml
components:
  schemas:
    AuthUser:
      type: object
      properties:
        id:
          type: string
        email:
          type: string
    
    LoginResponse:
      type: object
      properties:
        accessToken:
          type: string
        user:
          $ref: '#/components/schemas/AuthUser'  # ✅ Reuse schemas
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Template not found" | Run `npm install` to install Mustache |
| No types generated | Check `operationId` is defined in OpenAPI |
| Routes not working | Ensure service is registered in `src/routes/index.ts` |
| Type errors | Verify schema `$ref` paths are correct |
| Missing imports | Check referenced schemas exist in `components.schemas` |

## Next Steps

1. Read [OPENAPI_GENERATOR.md](./OPENAPI_GENERATOR.md) for detailed documentation
2. Check [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) for before/after explanation
3. Explore [scripts/templates/](./scripts/templates/) to customize output
4. View [services/auth_service/openapi/openapi.yaml](./services/auth_service/openapi/openapi.yaml) for complete example

## Resources

- **OpenAPI Spec**: `services/auth_service/openapi/openapi.yaml`
- **Generator Code**: `scripts/generate-openapi.ts`
- **Templates**: `scripts/templates/*.mustache`
- **Auth Service Docs**: `services/auth_service/AUTH_IMPLEMENTATION.md`
- **Testing Guide**: `services/auth_service/TESTING_GUIDE.md`
