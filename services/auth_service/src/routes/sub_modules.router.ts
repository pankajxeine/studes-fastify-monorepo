import type { FastifyPluginAsync } from 'fastify'
import { SubModulesService } from '../services/cpanel/sub_modules/SubModulesService'

const SubModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubModulesService()

  app.get('/sub_modules', async (request, reply) => {

    return await reply.send(controller.listSubModules(app, request))
  })
  app.post('/sub_modules', async (request, reply) => {
    return await reply.send(controller.createSubModule(app, request.body as any, request))
  })
  app.get('/sub_modules/:id', async (request, reply) => {

    return await reply.send(controller.getSubModulesById(app, request))
  })
  app.put('/sub_modules/:id', async (request, reply) => {
    return await reply.send(controller.updateSubModule(app, request.body as any, request))
  })
  app.delete('/sub_modules/:id', async (request, reply) => {

    return await reply.send(controller.deleteSubModule(app, request))
  })
}

export default SubModulesRoutes
