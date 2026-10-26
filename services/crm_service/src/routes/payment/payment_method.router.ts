import type { FastifyPluginAsync } from 'fastify'
import { PaymentMethodService } from '../../services/payment/payment_method/PaymentMethodService'

const PaymentMethodRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PaymentMethodService()

  app.get('/payment_method', { config: {"adminPermission":"payment.payment_method.read"} }, async (request, reply) => {
    const result = await controller.listPaymentMethod(app, request)
    return reply.send(result)
  })
  app.post('/payment_method', { config: {"adminPermission":"payment.payment_method.create"} }, async (request, reply) => {
    const result = await controller.createPaymentMethod(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payment_method/:payment_method_id', { config: {"adminPermission":"payment.payment_method.read"} }, async (request, reply) => {
    const result = await controller.getPaymentMethodById(app, request)
    return reply.send(result)
  })
  app.put('/payment_method/:payment_method_id', { config: {"adminPermission":"payment.payment_method.update"} }, async (request, reply) => {
    const result = await controller.updatePaymentMethod(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payment_method/:payment_method_id', { config: {"adminPermission":"payment.payment_method.delete"} }, async (request, reply) => {
    const result = await controller.deletePaymentMethod(app, request)
    return reply.send(result)
  })
}

export default PaymentMethodRoutes
