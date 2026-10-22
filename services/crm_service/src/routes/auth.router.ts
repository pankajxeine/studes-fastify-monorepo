import type { FastifyPluginAsync } from 'fastify'
import { AuthService } from '../services/auth/AuthService'

const AuthRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AuthService()

  app.post('/auth/login', {
    config: { isPublic: true, requireTenant: false }
  }, async (request, reply) => {
    // Await service work before sending. Passing a promise to reply.send() can
    // mark the reply as sent before a rejected validation promise reaches the
    // Fastify error handler.
    const result = await controller.authLogin(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/auth/refresh', {
    config: { isPublic: true, requireTenant: false }
  }, async (request, reply) => {
    const result = await controller.authRefresh(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/auth/logout', {
    config: { isPublic: true, requireTenant: false }
  }, async (request, reply) => {
    await controller.authLogout(app, request)
    return reply.code(204).send()
  })
  app.post('/auth/register', {
    config: { isPublic: true, requireTenant: false }
  }, async (request, reply) => {
    const result = await controller.authRegister(app, request.body as any, request)
    return reply.code(201).send(result)
  })
}

export default AuthRoutes
