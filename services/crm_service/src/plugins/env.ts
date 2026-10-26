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
        DEFAULT_CPANEL_SCHEMA: { type: 'string', default: 'demo_cpanel' },
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
      DEFAULT_CPANEL_SCHEMA: string
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
