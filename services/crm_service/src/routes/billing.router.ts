import type { FastifyPluginAsync } from 'fastify'
import { BillingService } from '../services/BillingService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const BillingRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BillingService()
  app.get('/billing/invoices', async (request, reply) => {
    return await controller.listInvoices(buildHeaders(request))
  })
  app.post('/billing/invoices', async (request, reply) => {
    return await controller.createInvoice(request.body as any, buildHeaders(request))
  })
  app.get('/billing/invoices/:invoiceId', async (request, reply) => {
    return await controller.getInvoice(buildHeaders(request))
  })
  app.post('/billing/payments', async (request, reply) => {
    return await controller.createPayment(request.body as any, buildHeaders(request))
  })
}

export default BillingRoutes
