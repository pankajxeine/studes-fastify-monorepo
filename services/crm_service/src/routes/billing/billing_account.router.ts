import type { FastifyPluginAsync } from 'fastify'
import { BillingAccountService } from '../../services/billing/billing_account/BillingAccountService'

const BillingAccountRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BillingAccountService()

  app.get('/billing_account', async (request, reply) => {
    const result = await controller.listBillingAccount(app, request)
    return reply.send(result)
  })
  app.post('/billing_account', async (request, reply) => {
    const result = await controller.createBillingAccount(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/billing_account/:id', async (request, reply) => {
    const result = await controller.getBillingAccountById(app, request)
    return reply.send(result)
  })
  app.put('/billing_account/:id', async (request, reply) => {
    const result = await controller.updateBillingAccount(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/billing_account/:id', async (request, reply) => {
    const result = await controller.deleteBillingAccount(app, request)
    return reply.send(result)
  })
}

export default BillingAccountRoutes
