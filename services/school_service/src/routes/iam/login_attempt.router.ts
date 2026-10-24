import type { FastifyPluginAsync } from 'fastify'
import { LoginAttemptService } from '../../services/iam/login_attempt/LoginAttemptService'

const LoginAttemptRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LoginAttemptService()

  app.get('/login_attempt', async (request, reply) => {
    const result = await controller.listLoginAttempt(app, request)
    return reply.send(result)
  })
  app.post('/login_attempt', async (request, reply) => {
    const result = await controller.createLoginAttempt(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/login_attempt/:id', async (request, reply) => {
    const result = await controller.getLoginAttemptById(app, request)
    return reply.send(result)
  })
  app.put('/login_attempt/:id', async (request, reply) => {
    const result = await controller.updateLoginAttempt(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/login_attempt/:id', async (request, reply) => {
    const result = await controller.deleteLoginAttempt(app, request)
    return reply.send(result)
  })
}

export default LoginAttemptRoutes
