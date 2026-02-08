import fp from 'fastify-plugin'
import { UnauthorizedError } from '../core';

export default fp(async (app) => {
  const jwtSecret = app.env?.JWT_SECRET ?? process.env.JWT_SECRET
  if (!jwtSecret) {
    throw new Error('JWT_SECRET is required')
  }

  await app.register((await import('@fastify/jwt')).default, { secret: jwtSecret })

  app.addHook('onRequest', async (request) => {
    const config = request.routeOptions.config ?? {}
    if (config.requireAuth === false) return

    try {
      await request.jwtVerify()
    } catch {
      throw new UnauthorizedError('Invalid or missing token')
    }
  })
})

declare module 'fastify' {
  interface FastifyContextConfig {
    requireAuth?: boolean
  }

  interface FastifyRouteConfig {
    requireAuth?: boolean
  }
}
