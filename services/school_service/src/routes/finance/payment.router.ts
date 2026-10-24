import type { FastifyPluginAsync } from 'fastify'
import { PaymentService } from '../../services/finance/payment/PaymentService'

const PaymentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PaymentService()

  app.get('/payment', async (request, reply) => {
    const result = await controller.listPayment(app, request)
    return reply.send(result)
  })
  app.post('/payment', async (request, reply) => {
    const result = await controller.createPayment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payment/:id', async (request, reply) => {
    const result = await controller.getPaymentById(app, request)
    return reply.send(result)
  })
  app.put('/payment/:id', async (request, reply) => {
    const result = await controller.updatePayment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payment/:id', async (request, reply) => {
    const result = await controller.deletePayment(app, request)
    return reply.send(result)
  })
}

export default PaymentRoutes
