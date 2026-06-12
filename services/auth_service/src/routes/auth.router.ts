import type { FastifyPluginAsync } from 'fastify'
import { AuthService } from '../services/AuthService'

const AuthRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AuthService()
  app.post('/auth/register', async (request, reply) => {
    return await controller.authRegister(app, request.body as any, request)
  })
  app.post('/auth/login', async (request, reply) => {
    return await controller.authLogin(app, request.body as any, request)
  })
  app.post('/auth/logout', async (request, reply) => {
    await controller.authLogout(app, request)
  })
  app.post('/auth/refresh', async (request, reply) => {
    return await controller.authRefresh(app, request)
  })
}

export default AuthRoutes
