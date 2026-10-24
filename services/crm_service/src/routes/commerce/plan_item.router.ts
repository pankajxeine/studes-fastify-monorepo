import type { FastifyPluginAsync } from 'fastify'
import { PlanItemService } from '../../services/commerce/plan_item/PlanItemService'

const PlanItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PlanItemService()

  app.get('/plan_item', async (request, reply) => {
    const result = await controller.listPlanItem(app, request)
    return reply.send(result)
  })
  app.post('/plan_item', async (request, reply) => {
    const result = await controller.createPlanItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/plan_item/:id', async (request, reply) => {
    const result = await controller.getPlanItemById(app, request)
    return reply.send(result)
  })
  app.put('/plan_item/:id', async (request, reply) => {
    const result = await controller.updatePlanItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/plan_item/:id', async (request, reply) => {
    const result = await controller.deletePlanItem(app, request)
    return reply.send(result)
  })
}

export default PlanItemRoutes
