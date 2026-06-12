import type { FastifyPluginAsync } from 'fastify'
import { EmailTemplatesService } from '../services/EmailTemplatesService'

const EmailTemplatesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmailTemplatesService()
  app.get('/email/templates', async (request, reply) => {
    return await controller.listEmailTemplates(app, request)
  })
  app.post('/email/templates', async (request, reply) => {
    return await controller.createEmailTemplate(app, request.body as any, request)
  })
  app.patch('/email/templates/:templateId', async (request, reply) => {
    return await controller.updateEmailTemplate(app, request.body as any, request)
  })
  app.delete('/email/templates/:templateId', async (request, reply) => {
    await controller.deleteEmailTemplate(app, request)
  })
}

export default EmailTemplatesRoutes
