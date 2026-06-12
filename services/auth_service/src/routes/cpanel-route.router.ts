import type { FastifyPluginAsync } from 'fastify'
import { CpanelRouteService } from '../services/CpanelRouteService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const CpanelRouteRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelRouteService()
  app.get('/cpanelroutes/:domain?', async (request, reply) => {
    return await controller.cpanelRouteDomain(buildHeaders(request))
  })
}

export default CpanelRouteRoutes
