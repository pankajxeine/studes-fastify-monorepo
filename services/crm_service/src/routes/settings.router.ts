import type { FastifyPluginAsync } from 'fastify'
import { SettingsService } from '../services/SettingsService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const SettingsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SettingsService()
  app.get('/settings/global', async (request, reply) => {
    return await controller.getGlobalSettings(buildHeaders(request))
  })
  app.put('/settings/global', async (request, reply) => {
    return await controller.updateGlobalSettings(request.body as any, buildHeaders(request))
  })
}

export default SettingsRoutes
