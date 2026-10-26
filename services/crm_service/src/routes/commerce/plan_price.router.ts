import type { FastifyPluginAsync } from 'fastify'
import { PlanPriceService } from '../../services/commerce/plan_price/PlanPriceService'

const PlanPriceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PlanPriceService()

  app.get('/plan_price', { config: {"adminPermission":"commerce.plan_price.read"} }, async (request, reply) => {
    const result = await controller.listPlanPrice(app, request)
    return reply.send(result)
  })
  app.post('/plan_price', { config: {"adminPermission":"commerce.plan_price.create"} }, async (request, reply) => {
    const result = await controller.createPlanPrice(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/plan_price/:plan_price_id', { config: {"adminPermission":"commerce.plan_price.read"} }, async (request, reply) => {
    const result = await controller.getPlanPriceById(app, request)
    return reply.send(result)
  })
  app.put('/plan_price/:plan_price_id', { config: {"adminPermission":"commerce.plan_price.update"} }, async (request, reply) => {
    const result = await controller.updatePlanPrice(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/plan_price/:plan_price_id', { config: {"adminPermission":"commerce.plan_price.delete"} }, async (request, reply) => {
    const result = await controller.deletePlanPrice(app, request)
    return reply.send(result)
  })
}

export default PlanPriceRoutes
