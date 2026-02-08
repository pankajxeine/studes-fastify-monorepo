# Fastify Microservices (Schema-per-tenant)

Services:
- auth_service
- billing_service
- notification_service

## Setup

1. Copy `.env.example` to `.env`.
2. Install deps at root: `npm install`.
3. Bootstrap public tables: `npm run db:init`.
4. Create a tenant: `npm run db:create-tenant -- acme "Acme Inc"`.

## Run locally

- Auth: `npm run dev:auth`
- Billing: `npm run dev:billing`
- Notification: `npm run dev:notification`

## Tenant resolution

- Header: `x-tenant-id` or `x-tenant-slug`
- Subdomain: `<tenant>.<TENANT_BASE_DOMAIN>`
- Priority set by `TENANT_HEADER_PRECEDENCE`

## Auth

- JWT access token returned by `/auth/login`
- Session cookie set via `SESSION_COOKIE_NAME`

## Docker

- `docker compose up --build`

## Gateway

- Run: 
npm run dev:gateway`n- Proxies: /auth, /billing, /notifications`

## Gateway Features

- Rate limiting (env: RATE_LIMIT_MAX, RATE_LIMIT_WINDOW)
- Centralized JWT auth (skips /auth)
- Correlation IDs via x-request-id


## Gateway Health

- GET /health (gateway only)
- GET /health/services (aggregated)


## Health (DB)

- Service DB checks: GET /health/db on each service
- Gateway aggregation: GET /health/db on gateway

## Gateway Logging

- Request/response logging with redaction for secrets (password, token, cookie)
- Correlation IDs via x-request-id`n

## Observability

- OpenTelemetry: set OTEL_EXPORTER_OTLP_ENDPOINT (and optionally OTEL_SERVICE_NAME)
- Metrics: GET /metrics on each service and gateway

