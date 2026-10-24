import type { FastifyPluginAsync } from 'fastify'
import { PlacementInterviewRoundService } from '../../services/partner/placement_interview_round/PlacementInterviewRoundService'

const PlacementInterviewRoundRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PlacementInterviewRoundService()

  app.get('/placement_interview_round', async (request, reply) => {
    const result = await controller.listPlacementInterviewRound(app, request)
    return reply.send(result)
  })
  app.post('/placement_interview_round', async (request, reply) => {
    const result = await controller.createPlacementInterviewRound(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/placement_interview_round/:id', async (request, reply) => {
    const result = await controller.getPlacementInterviewRoundById(app, request)
    return reply.send(result)
  })
  app.put('/placement_interview_round/:id', async (request, reply) => {
    const result = await controller.updatePlacementInterviewRound(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/placement_interview_round/:id', async (request, reply) => {
    const result = await controller.deletePlacementInterviewRound(app, request)
    return reply.send(result)
  })
}

export default PlacementInterviewRoundRoutes
