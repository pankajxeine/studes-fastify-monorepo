import type { FastifyPluginAsync } from 'fastify'
import { CpanelUsersService } from '../services/CpanelUsersService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const CpanelUsersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelUsersService()
  app.post('/sales/cpanel/users', async (request, reply) => {
    return await controller.createSalesCpanelUser(request.body as any, buildHeaders(request))
  })
}

export default CpanelUsersRoutes
