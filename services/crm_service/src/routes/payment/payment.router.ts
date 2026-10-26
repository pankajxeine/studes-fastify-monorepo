import type { FastifyPluginAsync } from 'fastify'
import { PaymentService } from '../../services/payment/payment/PaymentService'

const PaymentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PaymentService()

  app.get('/payment', { config: {"adminPermission":"payment.payment.read"} }, async (request, reply) => {
    const result = await controller.listPayment(app, request)
    return reply.send(result)
  })
  app.post('/payment', { config: {"adminPermission":"payment.payment.create"} }, async (request, reply) => {
    const result = await controller.createPayment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payment/:payment_id', { config: {"adminPermission":"payment.payment.read"} }, async (request, reply) => {
    const result = await controller.getPaymentById(app, request)
    return reply.send(result)
  })
  app.put('/payment/:payment_id', { config: {"adminPermission":"payment.payment.update"} }, async (request, reply) => {
    const result = await controller.updatePayment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payment/:payment_id', { config: {"adminPermission":"payment.payment.delete"} }, async (request, reply) => {
    const result = await controller.deletePayment(app, request)
    return reply.send(result)
  })
}

export default PaymentRoutes
