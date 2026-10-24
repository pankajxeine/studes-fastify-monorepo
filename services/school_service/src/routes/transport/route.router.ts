import type { FastifyPluginAsync } from 'fastify'
import { RouteService } from '../../services/transport/route/RouteService'

const RouteRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RouteService()

  app.get('/route', async (request, reply) => {
    const result = await controller.listRoute(app, request)
    return reply.send(result)
  })
  app.post('/route', async (request, reply) => {
    const result = await controller.createRoute(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/route/:id', async (request, reply) => {
    const result = await controller.getRouteById(app, request)
    return reply.send(result)
  })
  app.put('/route/:id', async (request, reply) => {
    const result = await controller.updateRoute(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/route/:id', async (request, reply) => {
    const result = await controller.deleteRoute(app, request)
    return reply.send(result)
  })
}

export default RouteRoutes
