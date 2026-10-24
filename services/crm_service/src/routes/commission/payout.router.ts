import type { FastifyPluginAsync } from 'fastify'
import { PayoutService } from '../../services/commission/payout/PayoutService'

const PayoutRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PayoutService()

  app.get('/payout', async (request, reply) => {
    const result = await controller.listPayout(app, request)
    return reply.send(result)
  })
  app.post('/payout', async (request, reply) => {
    const result = await controller.createPayout(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/payout/:id', async (request, reply) => {
    const result = await controller.getPayoutById(app, request)
    return reply.send(result)
  })
  app.put('/payout/:id', async (request, reply) => {
    const result = await controller.updatePayout(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/payout/:id', async (request, reply) => {
    const result = await controller.deletePayout(app, request)
    return reply.send(result)
  })
}

export default PayoutRoutes
