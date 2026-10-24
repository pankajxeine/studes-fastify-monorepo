import type { FastifyPluginAsync } from 'fastify'
import { PayslipService } from '../../services/hr/payslip/PayslipService'

const PayslipRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PayslipService()

  app.get('/payslip', async (request, reply) => {
    const result = await controller.listPayslip(app, request)
    return reply.send(result)
  })
  app.post('/payslip', async (request, reply) => {
    const result = await controller.createPayslip(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payslip/:id', async (request, reply) => {
    const result = await controller.getPayslipById(app, request)
    return reply.send(result)
  })
  app.put('/payslip/:id', async (request, reply) => {
    const result = await controller.updatePayslip(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payslip/:id', async (request, reply) => {
    const result = await controller.deletePayslip(app, request)
    return reply.send(result)
  })
}

export default PayslipRoutes
