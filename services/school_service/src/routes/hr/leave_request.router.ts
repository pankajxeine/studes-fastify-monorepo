import type { FastifyPluginAsync } from 'fastify'
import { LeaveRequestService } from '../../services/hr/leave_request/LeaveRequestService'

const LeaveRequestRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LeaveRequestService()

  app.get('/leave_request', async (request, reply) => {
    const result = await controller.listLeaveRequest(app, request)
    return reply.send(result)
  })
  app.post('/leave_request', async (request, reply) => {
    const result = await controller.createLeaveRequest(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/leave_request/:id', async (request, reply) => {
    const result = await controller.getLeaveRequestById(app, request)
    return reply.send(result)
  })
  app.put('/leave_request/:id', async (request, reply) => {
    const result = await controller.updateLeaveRequest(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/leave_request/:id', async (request, reply) => {
    const result = await controller.deleteLeaveRequest(app, request)
    return reply.send(result)
  })
}

export default LeaveRequestRoutes
