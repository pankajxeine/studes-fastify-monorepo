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

}

export default BillingServiceRoutes
