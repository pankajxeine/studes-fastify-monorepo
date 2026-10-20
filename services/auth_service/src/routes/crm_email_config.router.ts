import type { FastifyPluginAsync } from 'fastify'
import { CrmEmailConfigService } from '../services/cpanels/crm_email_config/CrmEmailConfigService'

const CrmEmailConfigRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmEmailConfigService()

  app.get('/crm_email_config', async (request, reply) => {
    const result = await controller.listCrmEmailConfig(app, request)
    return reply.send(result)
  })
  app.post('/crm_email_config', async (request, reply) => {
    const result = await controller.createCrmEmailConfig(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_email_config/:id', async (request, reply) => {
    const result = await controller.getCrmEmailConfigById(app, request)
    return reply.send(result)
  })
  app.put('/crm_email_config/:id', async (request, reply) => {
    const result = await controller.updateCrmEmailConfig(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_email_config/:id', async (request, reply) => {
    const result = await controller.deleteCrmEmailConfig(app, request)
    return reply.send(result)
  })
}

export default CrmEmailConfigRoutes
