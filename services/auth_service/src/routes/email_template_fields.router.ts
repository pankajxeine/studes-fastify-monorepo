import type { FastifyPluginAsync } from 'fastify'
import { EmailTemplateFieldsService } from '../services/cpanel/email_template_fields/EmailTemplateFieldsService'

const EmailTemplateFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmailTemplateFieldsService()

  app.get('/email_template_fields', async (request, reply) => {
    const result = await controller.listEmailTemplateFields(app, request)
    return reply.send(result)
  })
  app.post('/email_template_fields', async (request, reply) => {
    const result = await controller.createEmailTemplateField(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/email_template_fields/:id', async (request, reply) => {
    const result = await controller.getEmailTemplateFieldsById(app, request)
    return reply.send(result)
  })
  app.put('/email_template_fields/:id', async (request, reply) => {
    const result = await controller.updateEmailTemplateField(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/email_template_fields/:id', async (request, reply) => {
    const result = await controller.deleteEmailTemplateField(app, request)
    return reply.send(result)
  })
}

export default EmailTemplateFieldsRoutes
