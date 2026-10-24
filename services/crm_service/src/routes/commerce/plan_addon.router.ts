import type { FastifyPluginAsync } from 'fastify'
import { PlanAddonService } from '../../services/commerce/plan_addon/PlanAddonService'

const PlanAddonRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PlanAddonService()

  app.get('/plan_addon', async (request, reply) => {
    const result = await controller.listPlanAddon(app, request)
    return reply.send(result)
  })
  app.post('/plan_addon', async (request, reply) => {
    const result = await controller.createPlanAddon(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/plan_addon/:id', async (request, reply) => {
    const result = await controller.getPlanAddonById(app, request)
    return reply.send(result)
  })
  app.put('/plan_addon/:id', async (request, reply) => {
    const result = await controller.updatePlanAddon(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/plan_addon/:id', async (request, reply) => {
    const result = await controller.deletePlanAddon(app, request)
    return reply.send(result)
  })
}

export default PlanAddonRoutes
