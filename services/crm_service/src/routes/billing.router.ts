import type { FastifyPluginAsync } from 'fastify'
import { BillingService } from '../services/billing/BillingService'

const BillingRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BillingService()

  app.get('/billing/invoices', async (request, reply) => {
    const result = await controller.listInvoices(app, request)
    return reply.send(result)
  })
  app.post('/billing/invoices', async (request, reply) => {
    const result = await controller.createInvoice(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/billing/invoices/:invoiceId', async (request, reply) => {
    const result = await controller.getInvoice(app, request)
    return reply.send(result)
  })
  app.post('/billing/payments', async (request, reply) => {
    const result = await controller.createPayment(app, request.body as any, request)
    return reply.send(result)
  })
}

export default BillingRoutes
