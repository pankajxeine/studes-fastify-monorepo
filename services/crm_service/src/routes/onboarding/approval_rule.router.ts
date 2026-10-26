import type { FastifyPluginAsync } from 'fastify'
import { ApprovalRuleService } from '../../services/onboarding/approval_rule/ApprovalRuleService'

const ApprovalRuleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApprovalRuleService()

  app.get('/approval_rule', { config: {"adminPermission":"onboarding.approval_rule.read"} }, async (request, reply) => {
    const result = await controller.listApprovalRule(app, request)
    return reply.send(result)
  })
  app.post('/approval_rule', { config: {"adminPermission":"onboarding.approval_rule.create"} }, async (request, reply) => {
    const result = await controller.createApprovalRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/approval_rule/:approval_rule_id', { config: {"adminPermission":"onboarding.approval_rule.read"} }, async (request, reply) => {
    const result = await controller.getApprovalRuleById(app, request)
    return reply.send(result)
  })
  app.put('/approval_rule/:approval_rule_id', { config: {"adminPermission":"onboarding.approval_rule.update"} }, async (request, reply) => {
    const result = await controller.updateApprovalRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/approval_rule/:approval_rule_id', { config: {"adminPermission":"onboarding.approval_rule.delete"} }, async (request, reply) => {
    const result = await controller.deleteApprovalRule(app, request)
    return reply.send(result)
  })
}

export default ApprovalRuleRoutes
