import type { FastifyPluginAsync } from 'fastify'
import { EmailSettingsService } from '../services/EmailSettingsService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const EmailSettingsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmailSettingsService()
  app.get('/email/settings', async (request, reply) => {
    return await controller.getEmailSettings(buildHeaders(request))
  })
  app.put('/email/settings', async (request, reply) => {
    return await controller.updateEmailSettings(request.body as any, buildHeaders(request))
  })
}

export default EmailSettingsRoutes
