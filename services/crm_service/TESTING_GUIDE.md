# Auth Service Testing Guide

This guide provides instructions on how to test the Auth Service implementation.

## Prerequisites

1. **Environment Setup**
   - Copy `.env.example` to `.env` and configure values
   - Ensure PostgreSQL is running
   - Database URL is configured in `.env`

2. **Database Setup**
   - Run the SQL script: `sql/auth_setup.sql`
   - This creates necessary tables and test data

3. **Dependencies Installed**
   ```bash
   npm install
   ```

## Starting the Service

```bash
# Development mode
npm run dev

# Production mode
npm run build
npm start
```

The service will be available at `http://localhost:3001`

## Testing Methods

### 1. Using Postman (Recommended)

1. Import the collection from `postman/Auth_Service.postman_collection.json`
2. Update the `x-tenant-id` header with your tenant ID (default: `tenant-001`)
3. Run the requests in order:
   - Login first to get tokens
   - Copy `accessToken` and `refreshToken` to environment variables
   - Test Refresh Token endpoint
   - Test Logout endpoint

### 2. Using cURL

#### Login with Username
```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -H "x-tenant-id: tenant-001" \
  -d '{
    "username": "admin",
    "password": "password"
  }'
```

#### Login with Email
```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -H "x-tenant-id: tenant-001" \
  -d '{
    "email": "admin@example.com",
    "password": "password"
  }'
```

#### Refresh Token
```bash
curl -X POST http://localhost:3001/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "YOUR_REFRESH_TOKEN_HERE"
  }'
```

#### Logout
```bash
curl -X POST http://localhost:3001/auth/logout \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN_HERE"
```

### 3. Using Node.js Script

Create a test script `test_auth.js`:

```javascript
const https = require('https');

async function testAuth() {
  const baseUrl = 'http://localhost:3001';
  const tenantId = 'tenant-001';

  try {
    // Test 1: Login
    console.log('Test 1: Login...');
    const loginResponse = await makeRequest('POST', `${baseUrl}/auth/login`, {
      username: 'admin',
      password: 'password',
    }, {
      'x-tenant-id': tenantId,
    });

    console.log('Login successful!');
    console.log('Access Token:', loginResponse.accessToken);
    console.log('Refresh Token:', loginResponse.refreshToken);

    // Test 2: Refresh Token
    console.log('\nTest 2: Refresh Token...');
    const refreshResponse = await makeRequest('POST', `${baseUrl}/auth/refresh`, {
      refreshToken: loginResponse.refreshToken,
    });

    console.log('Token refresh successful!');
    console.log('New Access Token:', refreshResponse.accessToken);

    // Test 3: Logout
    console.log('\nTest 3: Logout...');
    await makeRequest('POST', `${baseUrl}/auth/logout`, null, {
      'Authorization': `Bearer ${refreshResponse.accessToken}`,
    });

    console.log('Logout successful!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

function makeRequest(method, url, body, headers = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || 80,
      path: urlObj.pathname,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    const req = require('http').request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          reject(new Error('Invalid JSON response'));
        }
      });
    });

    req.on('error', reject);
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

testAuth();
```

Run it with:
```bash
node test_auth.js
```

## Expected Responses

### Successful Login Response
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLTAwMSIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJ0ZW5hbnRJZCI6InRlbmFudC0wMDEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQwMDAwMDAwLCJleHAiOjE2NDAwMDA5MDB9.xxxxx",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLTAwMSIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJ0eXBlIjoicmVmcmVzaCIsImlhdCI6MTY0MDAwMDAwMCwiZXhwIjoxNjQwNjA0ODAwfQ.xxxxx",
  "user": {
    "id": "user-001",
    "email": "admin@example.com",
    "username": "admin",
    "first_name": "Admin",
    "last_name": "User"
  }
}
```

### Error Response - Invalid Credentials
```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Invalid credentials"
}
```

### Error Response - Missing Tenant Header
```json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "Tenant ID (x-tenant-id or x-domain) header is required"
}
```

## Test Scenarios

### Scenario 1: Basic Login Flow
1. Send login request with username and password
2. Verify access token and refresh token are returned
3. Verify user info is included in response

### Scenario 2: Email Login
1. Send login request with email and password
2. Verify same tokens and user info are returned

### Scenario 3: Token Refresh
1. Login to get tokens
2. Send refresh request with refresh token
3. Verify new access token is generated
4. Verify refresh token is also renewed

### Scenario 4: Invalid Credentials
1. Send login with wrong password
2. Verify 401 Unauthorized is returned

### Scenario 5: Missing Headers
1. Send login without x-tenant-id header
2. Verify 400 Bad Request is returned

### Scenario 6: User Not Found
1. Send login with non-existent username
2. Verify 401 Unauthorized is returned

### Scenario 7: Inactive User
1. Create a user with status='inactive'
2. Attempt to login
3. Verify login fails with message "User account is not active"

## Debugging

### Enable Debug Logging
Set environment variable:
```bash
LOG_LEVEL=debug
```

### Check Database Connection
```bash
psql $DATABASE_URL -c "SELECT 1"
```

### Verify JWT Secret
Check that JWT_SECRET is properly set:
```bash
echo $JWT_SECRET
```

### Decode JWT Token
Use online tool at https://jwt.io to decode tokens and verify payload

### Monitor Database Queries
Enable Sequelize logging:
```bash
LOG_LEVEL=debug
```

## Troubleshooting

### Error: "JWT_SECRET is required"
- Add `JWT_SECRET` to `.env` file
- Restart the service

### Error: "Database connection failed"
- Verify `DATABASE_URL` is correct
- Check PostgreSQL is running
- Run `sql/auth_setup.sql` to create tables

### Error: "Invalid credentials"
- Verify user exists in database
- Check password is correctly hashed with bcryptjs
- Ensure user status is 'active'

### Error: "Tenant ID header is required"
- Add `-H "x-tenant-id: tenant-001"` to request
- Or use `-H "x-domain: tenant-001"`

### Tokens not working
- Verify tokens haven't expired
- Check JWT_SECRET matches on both encode and decode
- Ensure Authorization header format is `Bearer <token>`

## Performance Testing

For load testing, use tools like Apache Bench or Artillery:

```bash
# Install Artillery
npm install -g artillery

# Create config file: load-test.yml
# Run load test
artillery run load-test.yml
```

Example Artillery config:
```yaml
config:
  target: 'http://localhost:3001'
  phases:
    - duration: 60
      arrivalRate: 10

scenarios:
  - name: 'Login Test'
    flow:
      - post:
          url: '/auth/login'
          headers:
            x-tenant-id: 'tenant-001'
          json:
            username: 'admin'
            password: 'password'
```

## Notes

- Default test user credentials: `admin` / `password`
- Access tokens expire in 15 minutes by default
- Refresh tokens expire in 7 days by default
- Passwords are stored as bcryptjs hashes
- User last_login is updated on successful authentication
