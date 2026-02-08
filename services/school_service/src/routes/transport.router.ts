import type { FastifyPluginAsync } from 'fastify'
import { TransportService } from '../services/TransportService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const TransportRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TransportService()
  app.get('/transport/routes', async (request, reply) => {
    return await controller.listTransportRoutes(buildHeaders(request))
  })
  app.post('/transport/routes', async (request, reply) => {
    return await controller.createTransportRoute(request.body as any, buildHeaders(request))
  })
  app.post('/transport/vehicles', async (request, reply) => {
    return await controller.createTransportVehicle(request.body as any, buildHeaders(request))
  })
  app.post('/transport/assignments', async (request, reply) => {
    return await controller.assignTransport(request.body as any, buildHeaders(request))
  })
}

export default TransportRoutes
