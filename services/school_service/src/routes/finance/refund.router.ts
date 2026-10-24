import type { FastifyPluginAsync } from 'fastify'
import { RefundService } from '../../services/finance/refund/RefundService'

const RefundRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RefundService()

  app.get('/refund', async (request, reply) => {
    const result = await controller.listRefund(app, request)
    return reply.send(result)
  })
  app.post('/refund', async (request, reply) => {
    const result = await controller.createRefund(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/refund/:id', async (request, reply) => {
    const result = await controller.getRefundById(app, request)
    return reply.send(result)
  })
  app.put('/refund/:id', async (request, reply) => {
    const result = await controller.updateRefund(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/refund/:id', async (request, reply) => {
    const result = await controller.deleteRefund(app, request)
    return reply.send(result)
  })
}

export default RefundRoutes
