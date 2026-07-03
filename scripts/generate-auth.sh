#!/bin/bash
# Script to generate auth service from OpenAPI spec using Mustache templates

echo "🔄 Generating Auth Service from OpenAPI..."

# Run the generator with --generate-service flag to create service implementations
npm run openapi:gen -- --out ./services/auth_service --generate-service

if [ $? -eq 0 ]; then
  echo "✅ Auth Service generated successfully!"
  echo ""
  echo "Generated files:"
  echo "  📁 src/services/auth/types/         - Type definitions from OpenAPI schemas"
  echo "  📄 src/services/auth/AuthController.ts  - Controller interface"
  echo "  📄 src/services/auth/AuthService.ts     - Service implementation (with TODOs)"
  echo "  📄 src/routes/auth.router.ts        - Fastify route handlers"
  echo "  📄 src/routes/index.ts              - Route registration"
  echo ""
  echo "Next steps:"
  echo "  1. Review generated types in src/services/auth/types/"
  echo "  2. Implement methods in src/services/auth/AuthService.ts"
  echo "  3. Test routes with: npm run dev:auth"
else
  echo "❌ Generation failed!"
  exit 1
fi
