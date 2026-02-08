import fp from 'fastify-plugin'
import { UnauthorizedError } from '../util/errors'

export default fp(async (app) => {
  const jwtSecret = app.env?.JWT_SECRET ?? process.env.JWT_SECRET
  if (!jwtSecret) {
    throw new Error('JWT_SECRET is required')
  }

  await app.register((await import('@fastify/jwt')).default, {
    secret: jwtSecret
  })

  app.addHook('onRequest', async (request) => {
    const url = request.url
    if (url.startsWith('/auth')) return

    try {
      await request.jwtVerify()
    } catch {
      throw new UnauthorizedError('Invalid or missing token')
    }
  })
})
