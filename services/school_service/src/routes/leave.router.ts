import type { FastifyPluginAsync } from 'fastify'
import { LeaveService } from '../services/LeaveService'

const LeaveRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LeaveService()
  app.get('/leave', async (request, reply) => {
    return await controller.listLeaveRequests(app, request)
  })
  app.post('/leave', async (request, reply) => {
    return await controller.createLeaveRequest(app, request.body as any, request)
  })
}

export default LeaveRoutes
