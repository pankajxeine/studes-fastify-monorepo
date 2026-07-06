import type { FastifyPluginAsync } from 'fastify'
import { AuthService } from '../services/auth/AuthService'

const AuthRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AuthService()

  app.post('/auth/login', async (request, reply) => {
    return await reply.send(controller.authLogin(app, request.body as any, request))
  })
  app.post('/auth/refresh', async (request, reply) => {
    return await reply.send(controller.authRefresh(app, request.body as any, request))
  })
  app.post('/auth/logout', async (request, reply) => {
    
    return await reply.send(controller.authLogout(app, request))
  })
  app.post('/auth/register', async (request, reply) => {
    return await reply.send(controller.authRegister(app, request.body as any, request))
  })
}

export default AuthRoutes
