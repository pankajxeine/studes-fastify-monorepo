import type { FastifyPluginAsync } from 'fastify'
import { PaymentAllocationService } from '../../services/payment/payment_allocation/PaymentAllocationService'

const PaymentAllocationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PaymentAllocationService()

  app.get('/payment_allocation', { config: {"adminPermission":"payment.payment_allocation.read"} }, async (request, reply) => {
    const result = await controller.listPaymentAllocation(app, request)
    return reply.send(result)
  })
  app.post('/payment_allocation', { config: {"adminPermission":"payment.payment_allocation.create"} }, async (request, reply) => {
    const result = await controller.createPaymentAllocation(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payment_allocation/:payment_allocation_id', { config: {"adminPermission":"payment.payment_allocation.read"} }, async (request, reply) => {
    const result = await controller.getPaymentAllocationById(app, request)
    return reply.send(result)
  })
  app.put('/payment_allocation/:payment_allocation_id', { config: {"adminPermission":"payment.payment_allocation.update"} }, async (request, reply) => {
    const result = await controller.updatePaymentAllocation(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payment_allocation/:payment_allocation_id', { config: {"adminPermission":"payment.payment_allocation.delete"} }, async (request, reply) => {
    const result = await controller.deletePaymentAllocation(app, request)
    return reply.send(result)
  })
}

export default PaymentAllocationRoutes
