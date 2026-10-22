# Auth Service Implementation

This document describes the authentication service implementation for the Studes platform.

## Features Implemented

### 1. User Login
- **Endpoint**: `POST /auth/login`
- **Request Headers**:
  - `x-tenant-id`: Tenant ID for database lookup (required)
  - `x-domain`: Alternative to tenant-id header (required)
- **Request Body**:
  ```json
  {
    "username": "admin",
    "email": "admin@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user-123",
      "email": "admin@example.com",
      "username": "admin",
      "first_name": "Admin",
      "last_name": "User"
    }
  }
  ```

**Features**:
- Validates tenant ID from request headers
- Accepts either username or email for login
- Verifies password using bcryptjs
- Checks user account status (must be 'active')
- Generates both access and refresh tokens
- Updates user's last_login timestamp

### 2. Token Refresh
- **Endpoint**: `POST /auth/refresh`
- **Request Body**:
  ```json
  {
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **Response**: Same as login response

**Features**:
- Validates refresh token signature and expiry
- Generates new access and refresh tokens
- Verifies user still exists and is active
- Returns updated user info

### 3. User Logout
- **Endpoint**: `POST /auth/logout`
- **Response**: `HTTP 201`

**Features**:
- Currently logs logout event (token blacklisting can be added later)

## Environment Variables

Add the following to your `.env` file:

```env
# JWT Configuration
JWT_SECRET=your-super-secret-key-for-access-tokens
JWT_REFRESH_SECRET=your-super-secret-key-for-refresh-tokens  # Optional, defaults to JWT_SECRET
JWT_EXPIRY=15m                                                # Access token expiry
JWT_REFRESH_EXPIRY=7d                                         # Refresh token expiry

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/studes_db

# Tenant Configuration
TENANT_BASE_DOMAIN=localtest.me
TENANT_HEADER_NAME=x-tenant-id
TENANT_HEADER_SLUG_NAME=x-tenant-slug
```

## JWT Token Payload

### Access Token
```json
{
  "userId": "user-123",
  "email": "admin@example.com",
  "tenantId": "tenant-001",
  "username": "admin",
  "role": "admin",
  "institute_id": "institute-001",
  "iat": 1640000000,
  "exp": 1640000900
}
```

### Refresh Token
```json
{
  "userId": "user-123",
  "email": "admin@example.com",
  "type": "refresh",
  "iat": 1640000000,
  "exp": 1640604800
}
```

## Database Schema

The implementation requires the following admin_users table:

```sql
CREATE TABLE admin_users (
  id UUID PRIMARY KEY,
  institute_id UUID,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),  -- Hashed with bcryptjs
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  phone VARCHAR(255),
  role VARCHAR(50),
  is_verified INT,
  last_login TIMESTAMP,
  status VARCHAR(50),      -- Must be 'active' for login
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

## Error Handling

All auth endpoints return proper HTTP error codes:

- **400 Bad Request**: Missing required fields or headers
- **401 Unauthorized**: Invalid credentials or expired tokens
- **500 Internal Server Error**: Database or server errors

Example error response:
```json
{
  "statusCode": 401,
  "message": "Invalid credentials",
  "error": "Unauthorized"
}
```

## Security Best Practices

1. **Password Security**:
   - Passwords are hashed using bcryptjs before storage
   - Never store plain-text passwords
   - Use a strong bcrypt salt rounds (default: 10)

2. **Token Security**:
   - Access tokens have short expiry (default: 15 minutes)
   - Refresh tokens have longer expiry (default: 7 days)
   - Tokens are signed with a strong secret
   - Separate secrets can be used for refresh tokens

3. **Tenant Isolation**:
   - Each request must include tenant ID
   - Users are validated from their tenant's database
   - Prevents cross-tenant data access

4. **Rate Limiting**: Recommended to implement on:
   - `/auth/login` - prevent brute force attacks
   - `/auth/refresh` - prevent token abuse

## Usage Example

```bash
# Login
curl -X POST http://localhost:3001/auth/login \
  -H "x-tenant-id: tenant-001" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "password123"
  }'

# Refresh Token
curl -X POST http://localhost:3001/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }'

# Logout
curl -X POST http://localhost:3001/auth/logout
```

## Protected Routes

To protect routes with JWT authentication, use the middleware:

```typescript
import { jwtAuthGuard } from '../middleware/jwtAuth'

app.post('/protected-route', async (request, reply) => {
  await jwtAuthGuard(request, reply)
  // Access user info from request.user
  console.log(request.user)
})
```

## Future Enhancements

1. **Token Blacklisting**: Implement Redis-based token blacklist for logout
2. **Two-Factor Authentication**: Add 2FA support
3. **OAuth Integration**: Support OAuth providers (Google, GitHub, etc.)
4. **Password Reset**: Implement forgot password functionality
5. **Account Lockout**: Lock account after failed login attempts
6. **Audit Logging**: Log all auth events for security monitoring
