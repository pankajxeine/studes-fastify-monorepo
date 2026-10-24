import type { FastifyPluginAsync } from 'fastify'
import { PayslipLineService } from '../../services/hr/payslip_line/PayslipLineService'

const PayslipLineRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PayslipLineService()

  app.get('/payslip_line', async (request, reply) => {
    const result = await controller.listPayslipLine(app, request)
    return reply.send(result)
  })
  app.post('/payslip_line', async (request, reply) => {
    const result = await controller.createPayslipLine(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payslip_line/:id', async (request, reply) => {
    const result = await controller.getPayslipLineById(app, request)
    return reply.send(result)
  })
  app.put('/payslip_line/:id', async (request, reply) => {
    const result = await controller.updatePayslipLine(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payslip_line/:id', async (request, reply) => {
    const result = await controller.deletePayslipLine(app, request)
    return reply.send(result)
  })
}

export default PayslipLineRoutes
