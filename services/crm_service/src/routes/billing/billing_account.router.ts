import type { FastifyPluginAsync } from 'fastify'
import { BillingAccountService } from '../../services/billing/billing_account/BillingAccountService'

const BillingAccountRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BillingAccountService()

  app.get('/billing_account', { config: {"adminPermission":"billing.billing_account.read"} }, async (request, reply) => {
    const result = await controller.listBillingAccount(app, request)
    return reply.send(result)
  })
  app.post('/billing_account', { config: {"adminPermission":"billing.billing_account.create"} }, async (request, reply) => {
    const result = await controller.createBillingAccount(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/billing_account/:billing_account_id', { config: {"adminPermission":"billing.billing_account.read"} }, async (request, reply) => {
    const result = await controller.getBillingAccountById(app, request)
    return reply.send(result)
  })
  app.put('/billing_account/:billing_account_id', { config: {"adminPermission":"billing.billing_account.update"} }, async (request, reply) => {
    const result = await controller.updateBillingAccount(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/billing_account/:billing_account_id', { config: {"adminPermission":"billing.billing_account.delete"} }, async (request, reply) => {
    const result = await controller.deleteBillingAccount(app, request)
    return reply.send(result)
  })
}

export default BillingAccountRoutes
