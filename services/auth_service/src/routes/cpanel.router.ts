import type { FastifyPluginAsync } from 'fastify'
import { CpanelService } from '../services/CpanelService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const CpanelRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelService()
  app.get('/cpanel-users', async (request, reply) => {
    return await controller.getCpanelUsers(buildHeaders(request))
  })
}

export default CpanelRoutes
