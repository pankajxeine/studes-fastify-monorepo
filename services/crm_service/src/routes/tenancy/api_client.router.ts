import type { FastifyPluginAsync } from 'fastify'
import { ApiClientService } from '../../services/tenancy/api_client/ApiClientService'

const ApiClientRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApiClientService()

  app.get('/api_client', async (request, reply) => {
    const result = await controller.listApiClient(app, request)
    return reply.send(result)
  })
  app.post('/api_client', async (request, reply) => {
    const result = await controller.createApiClient(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/api_client/:id', async (request, reply) => {
    const result = await controller.getApiClientById(app, request)
    return reply.send(result)
  })
  app.put('/api_client/:id', async (request, reply) => {
    const result = await controller.updateApiClient(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/api_client/:id', async (request, reply) => {
    const result = await controller.deleteApiClient(app, request)
    return reply.send(result)
  })
}

export default ApiClientRoutes
