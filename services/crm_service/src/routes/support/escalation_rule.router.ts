import type { FastifyPluginAsync } from 'fastify'
import { EscalationRuleService } from '../../services/support/escalation_rule/EscalationRuleService'

const EscalationRuleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EscalationRuleService()

  app.get('/escalation_rule', { config: {"adminPermission":"support.escalation_rule.read"} }, async (request, reply) => {
    const result = await controller.listEscalationRule(app, request)
    return reply.send(result)
  })
  app.post('/escalation_rule', { config: {"adminPermission":"support.escalation_rule.create"} }, async (request, reply) => {
    const result = await controller.createEscalationRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/escalation_rule/:escalation_rule_id', { config: {"adminPermission":"support.escalation_rule.read"} }, async (request, reply) => {
    const result = await controller.getEscalationRuleById(app, request)
    return reply.send(result)
  })
  app.put('/escalation_rule/:escalation_rule_id', { config: {"adminPermission":"support.escalation_rule.update"} }, async (request, reply) => {
    const result = await controller.updateEscalationRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/escalation_rule/:escalation_rule_id', { config: {"adminPermission":"support.escalation_rule.delete"} }, async (request, reply) => {
    const result = await controller.deleteEscalationRule(app, request)
    return reply.send(result)
  })
}

export default EscalationRuleRoutes
