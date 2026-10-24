import type { FastifyPluginAsync } from 'fastify'
import { ApprovalService } from '../../services/onboarding/approval/ApprovalService'

const ApprovalRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApprovalService()

  app.get('/approval', async (request, reply) => {
    const result = await controller.listApproval(app, request)
    return reply.send(result)
  })
  app.post('/approval', async (request, reply) => {
    const result = await controller.createApproval(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/approval/:id', async (request, reply) => {
    const result = await controller.getApprovalById(app, request)
    return reply.send(result)
  })
  app.put('/approval/:id', async (request, reply) => {
    const result = await controller.updateApproval(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/approval/:id', async (request, reply) => {
    const result = await controller.deleteApproval(app, request)
    return reply.send(result)
  })
}

export default ApprovalRoutes
