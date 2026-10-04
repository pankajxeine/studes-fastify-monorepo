import type { FastifyPluginAsync } from 'fastify'
import { SubModulesService } from '../services/cpanel/sub_modules/SubModulesService'

const SubModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubModulesService()

  app.get('/sub_modules', async (request, reply) => {
    const result = await controller.listSubModules(app, request)
    return reply.send(result)
  })
  app.post('/sub_modules', async (request, reply) => {
    const result = await controller.createSubModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sub_modules/:id', async (request, reply) => {
    const result = await controller.getSubModulesById(app, request)
    return reply.send(result)
  })
  app.put('/sub_modules/:id', async (request, reply) => {
    const result = await controller.updateSubModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sub_modules/:id', async (request, reply) => {
    const result = await controller.deleteSubModule(app, request)
    return reply.send(result)
  })
}

export default SubModulesRoutes
