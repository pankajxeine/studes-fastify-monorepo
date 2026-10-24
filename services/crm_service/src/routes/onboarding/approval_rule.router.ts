import type { FastifyPluginAsync } from 'fastify'
import { ApprovalRuleService } from '../../services/onboarding/approval_rule/ApprovalRuleService'

const ApprovalRuleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApprovalRuleService()

  app.get('/approval_rule', async (request, reply) => {
    const result = await controller.listApprovalRule(app, request)
    return reply.send(result)
  })
  app.post('/approval_rule', async (request, reply) => {
    const result = await controller.createApprovalRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/approval_rule/:id', async (request, reply) => {
    const result = await controller.getApprovalRuleById(app, request)
    return reply.send(result)
  })
  app.put('/approval_rule/:id', async (request, reply) => {
    const result = await controller.updateApprovalRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/approval_rule/:id', async (request, reply) => {
    const result = await controller.deleteApprovalRule(app, request)
    return reply.send(result)
  })
}

export default ApprovalRuleRoutes
