import type { FastifyPluginAsync } from 'fastify'
import { LeaveBalanceService } from '../../services/hr/leave_balance/LeaveBalanceService'

const LeaveBalanceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LeaveBalanceService()

  app.get('/leave_balance', async (request, reply) => {
    const result = await controller.listLeaveBalance(app, request)
    return reply.send(result)
  })
  app.post('/leave_balance', async (request, reply) => {
    const result = await controller.createLeaveBalance(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/leave_balance/:id', async (request, reply) => {
    const result = await controller.getLeaveBalanceById(app, request)
    return reply.send(result)
  })
  app.put('/leave_balance/:id', async (request, reply) => {
    const result = await controller.updateLeaveBalance(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/leave_balance/:id', async (request, reply) => {
    const result = await controller.deleteLeaveBalance(app, request)
    return reply.send(result)
  })
}

export default LeaveBalanceRoutes
