import type { FastifyPluginAsync } from 'fastify'
import { BillingServiceService } from '../services/BillingServiceService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const BillingServiceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BillingServiceService()
  app.get('/health', async (request, reply) => {
    return await controller.billingHealth(buildHeaders(request))
  })
  app.get('/health/db', async (request, reply) => {
    return await controller.billingHealthDb(buildHeaders(request))
  })
  app.get('/billing/invoices', async (request, reply) => {
    return await controller.listInvoices(buildHeaders(request))
  })
  app.post('/billing/invoices', async (request, reply) => {
    return await controller.createInvoice(request.body as any, buildHeaders(request))
  })
}

export default BillingServiceRoutes
