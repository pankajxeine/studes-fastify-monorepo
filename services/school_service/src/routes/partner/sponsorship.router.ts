import type { FastifyPluginAsync } from 'fastify'
import { SponsorshipService } from '../../services/partner/sponsorship/SponsorshipService'

const SponsorshipRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SponsorshipService()

  app.get('/sponsorship', async (request, reply) => {
    const result = await controller.listSponsorship(app, request)
    return reply.send(result)
  })
  app.post('/sponsorship', async (request, reply) => {
    const result = await controller.createSponsorship(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sponsorship/:id', async (request, reply) => {
    const result = await controller.getSponsorshipById(app, request)
    return reply.send(result)
  })
  app.put('/sponsorship/:id', async (request, reply) => {
    const result = await controller.updateSponsorship(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sponsorship/:id', async (request, reply) => {
    const result = await controller.deleteSponsorship(app, request)
    return reply.send(result)
  })
}

export default SponsorshipRoutes
