import type { FastifyPluginAsync } from 'fastify'
import { ApprovalService } from '../../services/onboarding/approval/ApprovalService'

const ApprovalRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApprovalService()

  app.get('/approval', { config: {"adminPermission":"onboarding.approval.read"} }, async (request, reply) => {
    const result = await controller.listApproval(app, request)
    return reply.send(result)
  })
  app.post('/approval', { config: {"adminPermission":"onboarding.approval.create"} }, async (request, reply) => {
    const result = await controller.createApproval(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/approval/:approval_id', { config: {"adminPermission":"onboarding.approval.read"} }, async (request, reply) => {
    const result = await controller.getApprovalById(app, request)
    return reply.send(result)
  })
  app.put('/approval/:approval_id', { config: {"adminPermission":"onboarding.approval.update"} }, async (request, reply) => {
    const result = await controller.updateApproval(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/approval/:approval_id', { config: {"adminPermission":"onboarding.approval.delete"} }, async (request, reply) => {
    const result = await controller.deleteApproval(app, request)
    return reply.send(result)
  })
}

export default ApprovalRoutes
