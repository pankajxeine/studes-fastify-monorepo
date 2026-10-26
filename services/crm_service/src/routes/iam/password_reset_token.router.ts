import type { FastifyPluginAsync } from 'fastify'
import { PasswordResetTokenService } from '../../services/iam/password_reset_token/PasswordResetTokenService'

const PasswordResetTokenRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PasswordResetTokenService()

  app.get('/password_reset_token', { config: {"adminPermission":"iam.password_reset_token.read"} }, async (request, reply) => {
    const result = await controller.listPasswordResetToken(app, request)
    return reply.send(result)
  })
  app.post('/password_reset_token', { config: {"adminPermission":"iam.password_reset_token.create"} }, async (request, reply) => {
    const result = await controller.createPasswordResetToken(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/password_reset_token/:password_reset_token_id', { config: {"adminPermission":"iam.password_reset_token.read"} }, async (request, reply) => {
    const result = await controller.getPasswordResetTokenById(app, request)
    return reply.send(result)
  })
  app.put('/password_reset_token/:password_reset_token_id', { config: {"adminPermission":"iam.password_reset_token.update"} }, async (request, reply) => {
    const result = await controller.updatePasswordResetToken(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/password_reset_token/:password_reset_token_id', { config: {"adminPermission":"iam.password_reset_token.delete"} }, async (request, reply) => {
    const result = await controller.deletePasswordResetToken(app, request)
    return reply.send(result)
  })
}

export default PasswordResetTokenRoutes
