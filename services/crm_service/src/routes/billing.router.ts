import type { FastifyPluginAsync } from 'fastify'
import { BillingService } from '../services/BillingService'

const BillingRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BillingService()
  app.get('/billing/invoices', async (request, reply) => {
    return await controller.listInvoices(app, request)
  })
  app.post('/billing/invoices', async (request, reply) => {
    return await controller.createInvoice(app, request.body as any, request)
  })
  app.get('/billing/invoices/:invoiceId', async (request, reply) => {
    return await controller.getInvoice(app, request)
  })
  app.post('/billing/payments', async (request, reply) => {
    return await controller.createPayment(app, request.body as any, request)
  })
}

export default BillingRoutes
