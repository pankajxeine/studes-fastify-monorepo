import type { FastifyPluginAsync } from 'fastify'
import { JobOfferService } from '../../services/partner/job_offer/JobOfferService'

const JobOfferRoutes: FastifyPluginAsync = async (app) => {
  const controller = new JobOfferService()

  app.get('/job_offer', async (request, reply) => {
    const result = await controller.listJobOffer(app, request)
    return reply.send(result)
  })
  app.post('/job_offer', async (request, reply) => {
    const result = await controller.createJobOffer(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/job_offer/:id', async (request, reply) => {
    const result = await controller.getJobOfferById(app, request)
    return reply.send(result)
  })
  app.put('/job_offer/:id', async (request, reply) => {
    const result = await controller.updateJobOffer(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/job_offer/:id', async (request, reply) => {
    const result = await controller.deleteJobOffer(app, request)
    return reply.send(result)
  })
}

export default JobOfferRoutes
