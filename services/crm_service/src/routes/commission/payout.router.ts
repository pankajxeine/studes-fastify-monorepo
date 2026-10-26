import type { FastifyPluginAsync } from 'fastify'
import { PayoutService } from '../../services/commission/payout/PayoutService'

const PayoutRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PayoutService()

  app.get('/payout', { config: {"adminPermission":"commission.payout.read"} }, async (request, reply) => {
    const result = await controller.listPayout(app, request)
    return reply.send(result)
  })
  app.post('/payout', { config: {"adminPermission":"commission.payout.create"} }, async (request, reply) => {
    const result = await controller.createPayout(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payout/:payout_id', { config: {"adminPermission":"commission.payout.read"} }, async (request, reply) => {
    const result = await controller.getPayoutById(app, request)
    return reply.send(result)
  })
  app.put('/payout/:payout_id', { config: {"adminPermission":"commission.payout.update"} }, async (request, reply) => {
    const result = await controller.updatePayout(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payout/:payout_id', { config: {"adminPermission":"commission.payout.delete"} }, async (request, reply) => {
    const result = await controller.deletePayout(app, request)
    return reply.send(result)
  })
}

export default PayoutRoutes
