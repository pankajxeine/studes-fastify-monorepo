import type { FastifyPluginAsync } from 'fastify'
import { CommissionRuleService } from '../../services/commission/commission_rule/CommissionRuleService'

const CommissionRuleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CommissionRuleService()

  app.get('/commission_rule', { config: {"adminPermission":"commission.commission_rule.read"} }, async (request, reply) => {
    const result = await controller.listCommissionRule(app, request)
    return reply.send(result)
  })
  app.post('/commission_rule', { config: {"adminPermission":"commission.commission_rule.create"} }, async (request, reply) => {
    const result = await controller.createCommissionRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/commission_rule/:commission_rule_id', { config: {"adminPermission":"commission.commission_rule.read"} }, async (request, reply) => {
    const result = await controller.getCommissionRuleById(app, request)
    return reply.send(result)
  })
  app.put('/commission_rule/:commission_rule_id', { config: {"adminPermission":"commission.commission_rule.update"} }, async (request, reply) => {
    const result = await controller.updateCommissionRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/commission_rule/:commission_rule_id', { config: {"adminPermission":"commission.commission_rule.delete"} }, async (request, reply) => {
    const result = await controller.deleteCommissionRule(app, request)
    return reply.send(result)
  })
}

export default CommissionRuleRoutes
