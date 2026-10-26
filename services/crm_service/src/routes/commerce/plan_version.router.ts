import type { FastifyPluginAsync } from 'fastify'
import { PlanVersionService } from '../../services/commerce/plan_version/PlanVersionService'

const PlanVersionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PlanVersionService()

  app.get('/plan_version', { config: {"adminPermission":"commerce.plan_version.read"} }, async (request, reply) => {
    const result = await controller.listPlanVersion(app, request)
    return reply.send(result)
  })
  app.post('/plan_version', { config: {"adminPermission":"commerce.plan_version.create"} }, async (request, reply) => {
    const result = await controller.createPlanVersion(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/plan_version/:plan_version_id', { config: {"adminPermission":"commerce.plan_version.read"} }, async (request, reply) => {
    const result = await controller.getPlanVersionById(app, request)
    return reply.send(result)
  })
  app.put('/plan_version/:plan_version_id', { config: {"adminPermission":"commerce.plan_version.update"} }, async (request, reply) => {
    const result = await controller.updatePlanVersion(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/plan_version/:plan_version_id', { config: {"adminPermission":"commerce.plan_version.delete"} }, async (request, reply) => {
    const result = await controller.deletePlanVersion(app, request)
    return reply.send(result)
  })
}

export default PlanVersionRoutes
