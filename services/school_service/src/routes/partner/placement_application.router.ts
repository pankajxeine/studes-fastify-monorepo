import type { FastifyPluginAsync } from 'fastify'
import { PlacementApplicationService } from '../../services/partner/placement_application/PlacementApplicationService'

const PlacementApplicationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PlacementApplicationService()

  app.get('/placement_application', async (request, reply) => {
    const result = await controller.listPlacementApplication(app, request)
    return reply.send(result)
  })
  app.post('/placement_application', async (request, reply) => {
    const result = await controller.createPlacementApplication(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/placement_application/:id', async (request, reply) => {
    const result = await controller.getPlacementApplicationById(app, request)
    return reply.send(result)
  })
  app.put('/placement_application/:id', async (request, reply) => {
    const result = await controller.updatePlacementApplication(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/placement_application/:id', async (request, reply) => {
    const result = await controller.deletePlacementApplication(app, request)
    return reply.send(result)
  })
}

export default PlacementApplicationRoutes
