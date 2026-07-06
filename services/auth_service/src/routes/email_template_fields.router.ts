import type { FastifyPluginAsync } from 'fastify'
import { EmailTemplateFieldsService } from '../services/cpanel/email_template_fields/EmailTemplateFieldsService'

const EmailTemplateFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmailTemplateFieldsService()

  app.get('/email_template_fields', async (request, reply) => {
    
    return await reply.send(controller.listEmailTemplateFields(app, request))
  })
  app.post('/email_template_fields', async (request, reply) => {
    return await reply.send(controller.createEmailTemplateField(app, request.body as any, request))
  })
  app.get('/email_template_fields/:id', async (request, reply) => {
    
    return await reply.send(controller.getEmailTemplateFieldsById(app, request))
  })
  app.put('/email_template_fields/:id', async (request, reply) => {
    return await reply.send(controller.updateEmailTemplateField(app, request.body as any, request))
  })
  app.delete('/email_template_fields/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteEmailTemplateField(app, request))
  })
}

export default EmailTemplateFieldsRoutes
