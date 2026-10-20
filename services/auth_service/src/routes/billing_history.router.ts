import type { FastifyPluginAsync } from 'fastify'
import { BillingHistoryService } from '../services/cpanels/billing_history/BillingHistoryService'

const BillingHistoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BillingHistoryService()

  app.get('/billing_history', async (request, reply) => {
    const result = await controller.listBillingHistory(app, request)
    return reply.send(result)
  })
  app.post('/billing_history', async (request, reply) => {
    const result = await controller.createBillingHistory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/billing_history/:id', async (request, reply) => {
    const result = await controller.getBillingHistoryById(app, request)
    return reply.send(result)
  })
  app.put('/billing_history/:id', async (request, reply) => {
    const result = await controller.updateBillingHistory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/billing_history/:id', async (request, reply) => {
    const result = await controller.deleteBillingHistory(app, request)
    return reply.send(result)
  })
}

export default BillingHistoryRoutes
