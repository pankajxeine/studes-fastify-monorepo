import fp from 'fastify-plugin'
import jwt from '@fastify/jwt'
import cookie from '@fastify/cookie'

export default fp(async (app) => {
  const jwtSecret = app.env?.JWT_SECRET ?? process.env.JWT_SECRET
  const cookieSecret = app.env?.SESSION_COOKIE_SECRET ?? process.env.SESSION_COOKIE_SECRET

  if (!jwtSecret) {
    throw new Error('JWT_SECRET is required')
  }
  if (!cookieSecret) {
    throw new Error('SESSION_COOKIE_SECRET is required')
  }

  await app.register(jwt, { secret: jwtSecret })
  await app.register(cookie, {
    secret: cookieSecret,
    hook: 'onRequest'
  })
})
