import type { FastifyPluginAsync } from 'fastify'
import { EmailTemplatesService } from '../services/email_templates/EmailTemplatesService'

const EmailTemplatesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmailTemplatesService()

  app.get('/email/templates', async (request, reply) => {
    const result = await controller.listEmailTemplates(app, request)
    return reply.send(result)
  })
  app.post('/email/templates', async (request, reply) => {
    const result = await controller.createEmailTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.patch('/email/templates/:templateId', async (request, reply) => {
    const result = await controller.updateEmailTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/email/templates/:templateId', async (request, reply) => {
    const result = await controller.deleteEmailTemplate(app, request)
    return reply.send(result)
  })
}

export default EmailTemplatesRoutes
