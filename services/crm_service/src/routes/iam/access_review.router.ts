import type { FastifyPluginAsync } from 'fastify'
import { AccessReviewService } from '../../services/iam/access_review/AccessReviewService'

const AccessReviewRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AccessReviewService()

  app.get('/access_review', async (request, reply) => {
    const result = await controller.listAccessReview(app, request)
    return reply.send(result)
  })
  app.post('/access_review', async (request, reply) => {
    const result = await controller.createAccessReview(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/access_review/:id', async (request, reply) => {
    const result = await controller.getAccessReviewById(app, request)
    return reply.send(result)
  })
  app.put('/access_review/:id', async (request, reply) => {
    const result = await controller.updateAccessReview(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/access_review/:id', async (request, reply) => {
    const result = await controller.deleteAccessReview(app, request)
    return reply.send(result)
  })
}

export default AccessReviewRoutes
