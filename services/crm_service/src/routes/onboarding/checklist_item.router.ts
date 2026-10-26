import type { FastifyPluginAsync } from 'fastify'
import { ChecklistItemService } from '../../services/onboarding/checklist_item/ChecklistItemService'

const ChecklistItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ChecklistItemService()

  app.get('/checklist_item', { config: {"adminPermission":"onboarding.checklist_item.read"} }, async (request, reply) => {
    const result = await controller.listChecklistItem(app, request)
    return reply.send(result)
  })
  app.post('/checklist_item', { config: {"adminPermission":"onboarding.checklist_item.create"} }, async (request, reply) => {
    const result = await controller.createChecklistItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/checklist_item/:checklist_item_id', { config: {"adminPermission":"onboarding.checklist_item.read"} }, async (request, reply) => {
    const result = await controller.getChecklistItemById(app, request)
    return reply.send(result)
  })
  app.put('/checklist_item/:checklist_item_id', { config: {"adminPermission":"onboarding.checklist_item.update"} }, async (request, reply) => {
    const result = await controller.updateChecklistItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/checklist_item/:checklist_item_id', { config: {"adminPermission":"onboarding.checklist_item.delete"} }, async (request, reply) => {
    const result = await controller.deleteChecklistItem(app, request)
    return reply.send(result)
  })
}

export default ChecklistItemRoutes
