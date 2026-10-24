import type { FastifyPluginAsync } from 'fastify'
import { RouteStopService } from '../../services/transport/route_stop/RouteStopService'

const RouteStopRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RouteStopService()

  app.get('/route_stop', async (request, reply) => {
    const result = await controller.listRouteStop(app, request)
    return reply.send(result)
  })
  app.post('/route_stop', async (request, reply) => {
    const result = await controller.createRouteStop(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/route_stop/:id', async (request, reply) => {
    const result = await controller.getRouteStopById(app, request)
    return reply.send(result)
  })
  app.put('/route_stop/:id', async (request, reply) => {
    const result = await controller.updateRouteStop(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/route_stop/:id', async (request, reply) => {
    const result = await controller.deleteRouteStop(app, request)
    return reply.send(result)
  })
}

export default RouteStopRoutes
