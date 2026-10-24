import type { FastifyPluginAsync } from 'fastify'
import { PaymentAllocationService } from '../../services/finance/payment_allocation/PaymentAllocationService'

const PaymentAllocationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PaymentAllocationService()

  app.get('/payment_allocation', async (request, reply) => {
    const result = await controller.listPaymentAllocation(app, request)
    return reply.send(result)
  })
  app.post('/payment_allocation', async (request, reply) => {
    const result = await controller.createPaymentAllocation(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payment_allocation/:id', async (request, reply) => {
    const result = await controller.getPaymentAllocationById(app, request)
    return reply.send(result)
  })
  app.put('/payment_allocation/:id', async (request, reply) => {
    const result = await controller.updatePaymentAllocation(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payment_allocation/:id', async (request, reply) => {
    const result = await controller.deletePaymentAllocation(app, request)
    return reply.send(result)
  })
}

export default PaymentAllocationRoutes
