import type { FastifyPluginAsync } from 'fastify'
import { EmailTemplateModulesService } from '../services/cpanel/email_template_modules/EmailTemplateModulesService'

const EmailTemplateModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmailTemplateModulesService()

  app.get('/email_template_modules', async (request, reply) => {
    
    return await reply.send(controller.listEmailTemplateModules(app, request))
  })
  app.post('/email_template_modules', async (request, reply) => {
    return await reply.send(controller.createEmailTemplateModule(app, request.body as any, request))
  })
  app.get('/email_template_modules/:id', async (request, reply) => {
    
    return await reply.send(controller.getEmailTemplateModulesById(app, request))
  })
  app.put('/email_template_modules/:id', async (request, reply) => {
    return await reply.send(controller.updateEmailTemplateModule(app, request.body as any, request))
  })
  app.delete('/email_template_modules/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteEmailTemplateModule(app, request))
  })
}

export default EmailTemplateModulesRoutes
