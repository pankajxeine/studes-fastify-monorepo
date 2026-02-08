import fp from 'fastify-plugin'
import env from '@fastify/env'
import type { FastifyBaseLogger, FastifyTypeProvider, FastifyTypeProviderDefault, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault } from 'fastify'

export default fp(async (app) => {
  await app.register(env, {
    schema: {
      type: 'object',
      required: [
        'PORT',
        'SERVICE_AUTH_URL',
        'SERVICE_BILLING_URL',
        'SERVICE_NOTIFICATION_URL',
        'SERVICE_SCHOOL_URL',
        'SERVICE_CRM_URL',
        'JWT_SECRET'
      ],
      properties: {
        PORT: { type: 'string', default: '3000' },
        LOG_LEVEL: { type: 'string', default: 'info' },
        CORS_ORIGIN: { type: 'string', default: '*' },
        SERVICE_AUTH_URL: { type: 'string' },
        SERVICE_BILLING_URL: { type: 'string' },
        SERVICE_NOTIFICATION_URL: { type: 'string' },
        SERVICE_SCHOOL_URL: { type: 'string' },
        SERVICE_CRM_URL: { type: 'string' },
        JWT_SECRET: { type: 'string' },
        RATE_LIMIT_MAX: { type: 'string', default: '120' },
        RATE_LIMIT_WINDOW: { type: 'string', default: '60 seconds' }
      }
    },
    dotenv: true,
    confKey: 'env'
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
      CORS_ORIGIN: string
      SERVICE_AUTH_URL: string
      SERVICE_BILLING_URL: string
      SERVICE_NOTIFICATION_URL: string
      SERVICE_SCHOOL_URL: string
      SERVICE_CRM_URL: string
      JWT_SECRET: string
      RATE_LIMIT_MAX: string
      RATE_LIMIT_WINDOW: string
    }
  }
}




