import type { FastifyPluginAsync } from 'fastify'
import { ApiTokenService } from '../../services/iam/api_token/ApiTokenService'

const ApiTokenRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApiTokenService()

  app.get('/api_token', { config: {"adminPermission":"iam.api_token.read"} }, async (request, reply) => {
    const result = await controller.listApiToken(app, request)
    return reply.send(result)
  })
  app.post('/api_token', { config: {"adminPermission":"iam.api_token.create"} }, async (request, reply) => {
    const result = await controller.createApiToken(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/api_token/:api_token_id', { config: {"adminPermission":"iam.api_token.read"} }, async (request, reply) => {
    const result = await controller.getApiTokenById(app, request)
    return reply.send(result)
  })
  app.put('/api_token/:api_token_id', { config: {"adminPermission":"iam.api_token.update"} }, async (request, reply) => {
    const result = await controller.updateApiToken(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/api_token/:api_token_id', { config: {"adminPermission":"iam.api_token.delete"} }, async (request, reply) => {
    const result = await controller.deleteApiToken(app, request)
    return reply.send(result)
  })
}

export default ApiTokenRoutes
