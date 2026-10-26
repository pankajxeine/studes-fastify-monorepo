import type { FastifyPluginAsync } from 'fastify'
import { CommissionPlanService } from '../../services/commission/commission_plan/CommissionPlanService'

const CommissionPlanRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CommissionPlanService()

  app.get('/commission_plan', { config: {"adminPermission":"commission.commission_plan.read"} }, async (request, reply) => {
    const result = await controller.listCommissionPlan(app, request)
    return reply.send(result)
  })
  app.post('/commission_plan', { config: {"adminPermission":"commission.commission_plan.create"} }, async (request, reply) => {
    const result = await controller.createCommissionPlan(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/commission_plan/:commission_plan_id', { config: {"adminPermission":"commission.commission_plan.read"} }, async (request, reply) => {
    const result = await controller.getCommissionPlanById(app, request)
    return reply.send(result)
  })
  app.put('/commission_plan/:commission_plan_id', { config: {"adminPermission":"commission.commission_plan.update"} }, async (request, reply) => {
    const result = await controller.updateCommissionPlan(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/commission_plan/:commission_plan_id', { config: {"adminPermission":"commission.commission_plan.delete"} }, async (request, reply) => {
    const result = await controller.deleteCommissionPlan(app, request)
    return reply.send(result)
  })
}

export default CommissionPlanRoutes
