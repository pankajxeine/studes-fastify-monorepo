import fp from 'fastify-plugin'
import { UnauthorizedError } from '../errors/http-errors'

export default fp(async (app) => {
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
}

