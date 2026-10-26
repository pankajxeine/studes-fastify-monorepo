import type { FastifyPluginAsync } from 'fastify'
import { AccessReviewItemService } from '../../services/iam/access_review_item/AccessReviewItemService'

const AccessReviewItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AccessReviewItemService()

  app.get('/access_review_item', { config: {"adminPermission":"iam.access_review_item.read"} }, async (request, reply) => {
    const result = await controller.listAccessReviewItem(app, request)
    return reply.send(result)
  })
  app.post('/access_review_item', { config: {"adminPermission":"iam.access_review_item.create"} }, async (request, reply) => {
    const result = await controller.createAccessReviewItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/access_review_item/:access_review_item_id', { config: {"adminPermission":"iam.access_review_item.read"} }, async (request, reply) => {
    const result = await controller.getAccessReviewItemById(app, request)
    return reply.send(result)
  })
  app.put('/access_review_item/:access_review_item_id', { config: {"adminPermission":"iam.access_review_item.update"} }, async (request, reply) => {
    const result = await controller.updateAccessReviewItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/access_review_item/:access_review_item_id', { config: {"adminPermission":"iam.access_review_item.delete"} }, async (request, reply) => {
    const result = await controller.deleteAccessReviewItem(app, request)
    return reply.send(result)
  })
}

export default AccessReviewItemRoutes
