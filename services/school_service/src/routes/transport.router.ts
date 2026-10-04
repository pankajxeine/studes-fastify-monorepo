import type { FastifyPluginAsync } from 'fastify'
import { TransportService } from '../services/transport/TransportService'

const TransportRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TransportService()

  app.get('/transport/routes', async (request, reply) => {
    const result = await controller.listTransportRoutes(app, request)
    return reply.send(result)
  })
  app.post('/transport/routes', async (request, reply) => {
    const result = await controller.createTransportRoute(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/transport/vehicles', async (request, reply) => {
    const result = await controller.createTransportVehicle(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/transport/assignments', async (request, reply) => {
    const result = await controller.assignTransport(app, request.body as any, request)
    return reply.send(result)
  })
}

export default TransportRoutes
