import type { FastifyPluginAsync } from 'fastify'
import { CrmModulesService } from '../services/cpanel/crm_modules/CrmModulesService'

const CrmModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmModulesService()

  app.get('/crm_modules', async (request, reply) => {
    const result = await controller.listCrmModules(app, request)
    return reply.send(result)
  })
  app.post('/crm_modules', async (request, reply) => {
    const result = await controller.createCrmModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_modules/:id', async (request, reply) => {
    const result = await controller.getCrmModulesById(app, request)
    return reply.send(result)
  })
  app.put('/crm_modules/:id', async (request, reply) => {
    const result = await controller.updateCrmModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_modules/:id', async (request, reply) => {
    const result = await controller.deleteCrmModule(app, request)
    return reply.send(result)
  })
}

export default CrmModulesRoutes
