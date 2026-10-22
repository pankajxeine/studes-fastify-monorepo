import type { FastifyPluginAsync } from 'fastify'
import { CrmEmailTemplatesService } from '../services/cpanels/crm_email_templates/CrmEmailTemplatesService'

const CrmEmailTemplatesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmEmailTemplatesService()

  app.get('/crm_email_templates', async (request, reply) => {
    const result = await controller.listCrmEmailTemplates(app, request)
    return reply.send(result)
  })
  app.post('/crm_email_templates', async (request, reply) => {
    const result = await controller.createCrmEmailTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_email_templates/:id', async (request, reply) => {
    const result = await controller.getCrmEmailTemplatesById(app, request)
    return reply.send(result)
  })
  app.put('/crm_email_templates/:id', async (request, reply) => {
    const result = await controller.updateCrmEmailTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_email_templates/:id', async (request, reply) => {
    const result = await controller.deleteCrmEmailTemplate(app, request)
    return reply.send(result)
  })
}

export default CrmEmailTemplatesRoutes
