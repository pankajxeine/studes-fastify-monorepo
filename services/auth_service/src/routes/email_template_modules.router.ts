import type { FastifyPluginAsync } from 'fastify'
import { EmailTemplateModulesService } from '../services/cpanels/email_template_modules/EmailTemplateModulesService'

const EmailTemplateModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmailTemplateModulesService()

  app.get('/email_template_modules', async (request, reply) => {
    const result = await controller.listEmailTemplateModules(app, request)
    return reply.send(result)
  })
  app.post('/email_template_modules', async (request, reply) => {
    const result = await controller.createEmailTemplateModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/email_template_modules/:id', async (request, reply) => {
    const result = await controller.getEmailTemplateModulesById(app, request)
    return reply.send(result)
  })
  app.put('/email_template_modules/:id', async (request, reply) => {
    const result = await controller.updateEmailTemplateModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/email_template_modules/:id', async (request, reply) => {
    const result = await controller.deleteEmailTemplateModule(app, request)
    return reply.send(result)
  })
}

export default EmailTemplateModulesRoutes
