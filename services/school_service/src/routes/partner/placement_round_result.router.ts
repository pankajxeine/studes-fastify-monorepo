import type { FastifyPluginAsync } from 'fastify'
import { PlacementRoundResultService } from '../../services/partner/placement_round_result/PlacementRoundResultService'

const PlacementRoundResultRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PlacementRoundResultService()

  app.get('/placement_round_result', async (request, reply) => {
    const result = await controller.listPlacementRoundResult(app, request)
    return reply.send(result)
  })
  app.post('/placement_round_result', async (request, reply) => {
    const result = await controller.createPlacementRoundResult(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/placement_round_result/:id', async (request, reply) => {
    const result = await controller.getPlacementRoundResultById(app, request)
    return reply.send(result)
  })
  app.put('/placement_round_result/:id', async (request, reply) => {
    const result = await controller.updatePlacementRoundResult(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/placement_round_result/:id', async (request, reply) => {
    const result = await controller.deletePlacementRoundResult(app, request)
    return reply.send(result)
  })
}

export default PlacementRoundResultRoutes
