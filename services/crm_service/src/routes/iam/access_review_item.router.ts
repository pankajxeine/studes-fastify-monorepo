import type { FastifyPluginAsync } from 'fastify'
import { AccessReviewItemService } from '../../services/iam/access_review_item/AccessReviewItemService'

const AccessReviewItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AccessReviewItemService()

  app.get('/access_review_item', async (request, reply) => {
    const result = await controller.listAccessReviewItem(app, request)
    return reply.send(result)
  })
  app.post('/access_review_item', async (request, reply) => {
    const result = await controller.createAccessReviewItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/access_review_item/:id', async (request, reply) => {
    const result = await controller.getAccessReviewItemById(app, request)
    return reply.send(result)
  })
  app.put('/access_review_item/:id', async (request, reply) => {
    const result = await controller.updateAccessReviewItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/access_review_item/:id', async (request, reply) => {
    const result = await controller.deleteAccessReviewItem(app, request)
    return reply.send(result)
  })
}

export default AccessReviewItemRoutes
