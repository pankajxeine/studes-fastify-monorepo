import fp from 'fastify-plugin'
import env from '@fastify/env'
import type { FastifyBaseLogger, FastifyTypeProvider, FastifyTypeProviderDefault, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault } from 'fastify'

export default fp(async (app) => {
  await app.register(env, {
    schema: {
      type: 'object',
      required: ['PORT', 'DATABASE_URL', 'JWT_SECRET', 'SESSION_COOKIE_NAME', 'SESSION_COOKIE_SECRET'],
      properties: {
        PORT: { type: 'string', default: '3001' },
        LOG_LEVEL: { type: 'string', default: 'info' },
        DATABASE_URL: { type: 'string' },
        TENANT_BASE_DOMAIN: { type: 'string', default: 'localtest.me' },
        TENANT_HEADER_NAME: { type: 'string', default: 'x-tenant-id' },
        TENANT_HEADER_SLUG_NAME: { type: 'string', default: 'x-tenant-slug' },
        TENANT_HEADER_PRECEDENCE: { type: 'string', default: 'header_then_subdomain' },
        DEFAULT_CPANEL_SCHEMA: { type: 'string', default: 'default_cpanel' },
        DEFAULT_CPANEL_ROUTE_SCHEMA: { type: 'string', default: 'default_cpanel_route' },
        CORS_ORIGIN: { type: 'string', default: '*' },
        JWT_SECRET: { type: 'string' },
        JWT_REFRESH_SECRET: { type: 'string' },
        JWT_EXPIRY: { type: 'string', default: '15m' },
        JWT_REFRESH_EXPIRY: { type: 'string', default: '7d' },
        SESSION_COOKIE_NAME: { type: 'string', default: 'studes_session' },
        SESSION_COOKIE_SECRET: { type: 'string' },
      },
    },
    dotenv: true,
    confKey: 'env',
  })
})

declare module 'fastify' {
  interface FastifyInstance<
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
    RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
  > {
    env: {
      PORT: string
      LOG_LEVEL: string
      DATABASE_URL: string
      TENANT_BASE_DOMAIN: string
      TENANT_HEADER_NAME: string
      TENANT_HEADER_SLUG_NAME: string
      TENANT_HEADER_PRECEDENCE: 'header_then_subdomain' | 'subdomain_then_header'
      DEFAULT_CPANEL_SCHEMA: string
      DEFAULT_CPANEL_ROUTE_SCHEMA: string
      CORS_ORIGIN: string
      JWT_SECRET: string
      JWT_REFRESH_SECRET?: string
      JWT_EXPIRY: string
      JWT_REFRESH_EXPIRY: string
      SESSION_COOKIE_NAME: string
      SESSION_COOKIE_SECRET: string
    }
  }
}
