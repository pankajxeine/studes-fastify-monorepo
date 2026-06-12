import type { FastifyPluginAsync } from 'fastify'
import { TransportService } from '../services/TransportService'

const TransportRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TransportService()
  app.get('/transport/routes', async (request, reply) => {
    return await controller.listTransportRoutes(app, request)
  })
  app.post('/transport/routes', async (request, reply) => {
    return await controller.createTransportRoute(app, request.body as any, request)
  })
  app.post('/transport/vehicles', async (request, reply) => {
    return await controller.createTransportVehicle(app, request.body as any, request)
  })
  app.post('/transport/assignments', async (request, reply) => {
    return await controller.assignTransport(app, request.body as any, request)
  })
}

export default TransportRoutes
