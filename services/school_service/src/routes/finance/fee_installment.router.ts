import type { FastifyPluginAsync } from 'fastify'
import { FeeInstallmentService } from '../../services/finance/fee_installment/FeeInstallmentService'

const FeeInstallmentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeeInstallmentService()

  app.get('/fee_installment', async (request, reply) => {
    const result = await controller.listFeeInstallment(app, request)
    return reply.send(result)
  })
  app.post('/fee_installment', async (request, reply) => {
    const result = await controller.createFeeInstallment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/fee_installment/:id', async (request, reply) => {
    const result = await controller.getFeeInstallmentById(app, request)
    return reply.send(result)
  })
  app.put('/fee_installment/:id', async (request, reply) => {
    const result = await controller.updateFeeInstallment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/fee_installment/:id', async (request, reply) => {
    const result = await controller.deleteFeeInstallment(app, request)
    return reply.send(result)
  })
}

export default FeeInstallmentRoutes
