import type { FastifyPluginAsync } from 'fastify'
import { CrmUserModulesService } from '../services/cpanel/crm_user_modules/CrmUserModulesService'

const CrmUserModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmUserModulesService()

  app.get('/crm_user_modules', async (request, reply) => {
    const result = await controller.listCrmUserModules(app, request)
    return reply.send(result)
  })
  app.post('/crm_user_modules', async (request, reply) => {
    const result = await controller.createCrmUserModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_user_modules/:id', async (request, reply) => {
    const result = await controller.getCrmUserModulesById(app, request)
    return reply.send(result)
  })
  app.put('/crm_user_modules/:id', async (request, reply) => {
    const result = await controller.updateCrmUserModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_user_modules/:id', async (request, reply) => {
    const result = await controller.deleteCrmUserModule(app, request)
    return reply.send(result)
  })
}

export default CrmUserModulesRoutes
