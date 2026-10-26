import type { FastifyPluginAsync } from 'fastify'
import { RefundService } from '../../services/payment/refund/RefundService'

const RefundRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RefundService()

  app.get('/refund', { config: {"adminPermission":"payment.refund.read"} }, async (request, reply) => {
    const result = await controller.listRefund(app, request)
    return reply.send(result)
  })
  app.post('/refund', { config: {"adminPermission":"payment.refund.create"} }, async (request, reply) => {
    const result = await controller.createRefund(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/refund/:refund_id', { config: {"adminPermission":"payment.refund.read"} }, async (request, reply) => {
    const result = await controller.getRefundById(app, request)
    return reply.send(result)
  })
  app.put('/refund/:refund_id', { config: {"adminPermission":"payment.refund.update"} }, async (request, reply) => {
    const result = await controller.updateRefund(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/refund/:refund_id', { config: {"adminPermission":"payment.refund.delete"} }, async (request, reply) => {
    const result = await controller.deleteRefund(app, request)
    return reply.send(result)
  })
}

export default RefundRoutes
