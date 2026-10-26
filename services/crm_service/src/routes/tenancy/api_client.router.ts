import type { FastifyPluginAsync } from 'fastify'
import { ApiClientService } from '../../services/tenancy/api_client/ApiClientService'

const ApiClientRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApiClientService()

  app.get('/api_client', { config: {"adminPermission":"tenancy.api_client.read"} }, async (request, reply) => {
    const result = await controller.listApiClient(app, request)
    return reply.send(result)
  })
  app.post('/api_client', { config: {"adminPermission":"tenancy.api_client.create"} }, async (request, reply) => {
    const result = await controller.createApiClient(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/api_client/:api_client_id', { config: {"adminPermission":"tenancy.api_client.read"} }, async (request, reply) => {
    const result = await controller.getApiClientById(app, request)
    return reply.send(result)
  })
  app.put('/api_client/:api_client_id', { config: {"adminPermission":"tenancy.api_client.update"} }, async (request, reply) => {
    const result = await controller.updateApiClient(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/api_client/:api_client_id', { config: {"adminPermission":"tenancy.api_client.delete"} }, async (request, reply) => {
    const result = await controller.deleteApiClient(app, request)
    return reply.send(result)
  })
}

export default ApiClientRoutes
