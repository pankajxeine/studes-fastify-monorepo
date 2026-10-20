import type { FastifyPluginAsync } from 'fastify'
import { CpanelModulesService } from '../services/cpanels/cpanel_modules/CpanelModulesService'

const CpanelModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelModulesService()

  app.get('/cpanel_modules', async (request, reply) => {
    const result = await controller.listCpanelModules(app, request)
    return reply.send(result)
  })
  app.post('/cpanel_modules', async (request, reply) => {
    const result = await controller.createCpanelModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/cpanel_modules/:id', async (request, reply) => {
    const result = await controller.getCpanelModulesById(app, request)
    return reply.send(result)
  })
  app.put('/cpanel_modules/:id', async (request, reply) => {
    const result = await controller.updateCpanelModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/cpanel_modules/:id', async (request, reply) => {
    const result = await controller.deleteCpanelModule(app, request)
    return reply.send(result)
  })
}

export default CpanelModulesRoutes
