import type { FastifyPluginAsync } from 'fastify'
import { PlanService } from '../../services/commerce/plan/PlanService'

const PlanRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PlanService()

  app.get('/plan', async (request, reply) => {
    const result = await controller.listPlan(app, request)
    return reply.send(result)
  })
  app.post('/plan', async (request, reply) => {
    const result = await controller.createPlan(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/plan/:id', async (request, reply) => {
    const result = await controller.getPlanById(app, request)
    return reply.send(result)
  })
  app.put('/plan/:id', async (request, reply) => {
    const result = await controller.updatePlan(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/plan/:id', async (request, reply) => {
    const result = await controller.deletePlan(app, request)
    return reply.send(result)
  })
}

export default PlanRoutes
