import type { FastifyPluginAsync } from 'fastify'
import { AdminAuthService } from '../services/auth/AdminAuthService'

const AuthRoutes: FastifyPluginAsync = async (app) => {
  const adminAuth = new AdminAuthService()

  app.post('/auth/admin/login', {
    config: { isPublic: true }
  }, async (request, reply) => {
    const result = await adminAuth.login(app, request, request.body)
    adminAuth.setRefreshCookie(app, reply, result.refreshToken)
    return reply.send({ accessToken: result.accessToken, expiresIn: result.expiresIn, user: result.user })
  })
  app.post('/auth/admin/refresh', {
    config: { isPublic: true }
  }, async (request, reply) => {
    adminAuth.assertBrowserOrigin(app, request)
    const result = await adminAuth.refresh(app, request)
    adminAuth.setRefreshCookie(app, reply, result.refreshToken)
    return reply.send({ accessToken: result.accessToken, expiresIn: result.expiresIn })
  })
  app.post('/auth/admin/logout', {
    config: { isPublic: true }
  }, async (request, reply) => {
    adminAuth.assertBrowserOrigin(app, request)
    const bearer = request.headers.authorization?.match(/^Bearer\s+(.+)$/i)?.[1]
    if (bearer) {
      try { request.user = app.jwt.verify(bearer) as any } catch { /* cookie hash still permits logout */ }
    }
    await adminAuth.logout(app, request)
    adminAuth.clearRefreshCookie(app, reply)
    return reply.code(204).send()
  })
}

export default AuthRoutes
