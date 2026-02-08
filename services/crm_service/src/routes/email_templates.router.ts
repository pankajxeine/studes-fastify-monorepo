import type { FastifyPluginAsync } from 'fastify'
import { EmailTemplatesService } from '../services/EmailTemplatesService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const EmailTemplatesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmailTemplatesService()
  app.get('/email/templates', async (request, reply) => {
    return await controller.listEmailTemplates(buildHeaders(request))
  })
  app.post('/email/templates', async (request, reply) => {
    return await controller.createEmailTemplate(request.body as any, buildHeaders(request))
  })
  app.patch('/email/templates/:templateId', async (request, reply) => {
    return await controller.updateEmailTemplate(request.body as any, buildHeaders(request))
  })
  app.delete('/email/templates/:templateId', async (request, reply) => {
    await controller.deleteEmailTemplate(buildHeaders(request))
  })
}

export default EmailTemplatesRoutes
