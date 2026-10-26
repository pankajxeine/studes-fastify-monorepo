import type { FastifyPluginAsync } from 'fastify'
import { LoginAttemptService } from '../../services/iam/login_attempt/LoginAttemptService'

const LoginAttemptRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LoginAttemptService()

  app.get('/login_attempt', { config: {"adminPermission":"iam.login_attempt.read"} }, async (request, reply) => {
    const result = await controller.listLoginAttempt(app, request)
    return reply.send(result)
  })
  app.post('/login_attempt', { config: {"adminPermission":"iam.login_attempt.create"} }, async (request, reply) => {
    const result = await controller.createLoginAttempt(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/login_attempt/:login_attempt_id', { config: {"adminPermission":"iam.login_attempt.read"} }, async (request, reply) => {
    const result = await controller.getLoginAttemptById(app, request)
    return reply.send(result)
  })
  app.put('/login_attempt/:login_attempt_id', { config: {"adminPermission":"iam.login_attempt.update"} }, async (request, reply) => {
    const result = await controller.updateLoginAttempt(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/login_attempt/:login_attempt_id', { config: {"adminPermission":"iam.login_attempt.delete"} }, async (request, reply) => {
    const result = await controller.deleteLoginAttempt(app, request)
    return reply.send(result)
  })
}

export default LoginAttemptRoutes
