import type { FastifyPluginAsync } from 'fastify'
import { PaymentMethodService } from '../../services/payment/payment_method/PaymentMethodService'

const PaymentMethodRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PaymentMethodService()

  app.get('/payment_method', async (request, reply) => {
    const result = await controller.listPaymentMethod(app, request)
    return reply.send(result)
  })
  app.post('/payment_method', async (request, reply) => {
    const result = await controller.createPaymentMethod(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payment_method/:id', async (request, reply) => {
    const result = await controller.getPaymentMethodById(app, request)
    return reply.send(result)
  })
  app.put('/payment_method/:id', async (request, reply) => {
    const result = await controller.updatePaymentMethod(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payment_method/:id', async (request, reply) => {
    const result = await controller.deletePaymentMethod(app, request)
    return reply.send(result)
  })
}

export default PaymentMethodRoutes
