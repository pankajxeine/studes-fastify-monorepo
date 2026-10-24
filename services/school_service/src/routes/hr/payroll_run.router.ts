import type { FastifyPluginAsync } from 'fastify'
import { PayrollRunService } from '../../services/hr/payroll_run/PayrollRunService'

const PayrollRunRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PayrollRunService()

  app.get('/payroll_run', async (request, reply) => {
    const result = await controller.listPayrollRun(app, request)
    return reply.send(result)
  })
  app.post('/payroll_run', async (request, reply) => {
    const result = await controller.createPayrollRun(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payroll_run/:id', async (request, reply) => {
    const result = await controller.getPayrollRunById(app, request)
    return reply.send(result)
  })
  app.put('/payroll_run/:id', async (request, reply) => {
    const result = await controller.updatePayrollRun(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payroll_run/:id', async (request, reply) => {
    const result = await controller.deletePayrollRun(app, request)
    return reply.send(result)
  })
}

export default PayrollRunRoutes
