import type { FastifyPluginAsync } from 'fastify'
import { LeaveService } from '../services/leave/LeaveService'

const LeaveRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LeaveService()

  app.get('/leave', async (request, reply) => {
    const result = await controller.listLeaveRequests(app, request)
    return reply.send(result)
  })
  app.post('/leave', async (request, reply) => {
    const result = await controller.createLeaveRequest(app, request.body as any, request)
    return reply.send(result)
  })
}

export default LeaveRoutes
