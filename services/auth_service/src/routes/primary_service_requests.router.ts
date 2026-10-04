import type { FastifyPluginAsync } from 'fastify'
import { PrimaryServiceRequestsService } from '../services/cpanel/primary_service_requests/PrimaryServiceRequestsService'

const PrimaryServiceRequestsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PrimaryServiceRequestsService()

  app.get('/primary_service_requests', async (request, reply) => {
    const result = await controller.listPrimaryServiceRequests(app, request)
    return reply.send(result)
  })
  app.post('/primary_service_requests', async (request, reply) => {
    const result = await controller.createPrimaryServiceRequest(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/primary_service_requests/:id', async (request, reply) => {
    const result = await controller.getPrimaryServiceRequestsById(app, request)
    return reply.send(result)
  })
  app.put('/primary_service_requests/:id', async (request, reply) => {
    const result = await controller.updatePrimaryServiceRequest(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/primary_service_requests/:id', async (request, reply) => {
    const result = await controller.deletePrimaryServiceRequest(app, request)
    return reply.send(result)
  })
}

export default PrimaryServiceRequestsRoutes
