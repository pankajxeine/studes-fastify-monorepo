import type { FastifyPluginAsync } from 'fastify'
import { EscalationRuleService } from '../../services/support/escalation_rule/EscalationRuleService'

const EscalationRuleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EscalationRuleService()

  app.get('/escalation_rule', async (request, reply) => {
    const result = await controller.listEscalationRule(app, request)
    return reply.send(result)
  })
  app.post('/escalation_rule', async (request, reply) => {
    const result = await controller.createEscalationRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/escalation_rule/:id', async (request, reply) => {
    const result = await controller.getEscalationRuleById(app, request)
    return reply.send(result)
  })
  app.put('/escalation_rule/:id', async (request, reply) => {
    const result = await controller.updateEscalationRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/escalation_rule/:id', async (request, reply) => {
    const result = await controller.deleteEscalationRule(app, request)
    return reply.send(result)
  })
}

export default EscalationRuleRoutes
