import type { FastifyPluginAsync } from 'fastify'
import { ModulesService } from '../services/cpanel/modules/ModulesService'

const ModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ModulesService()

  app.get('/modules', async (request, reply) => {
    const result = await controller.listModules(app, request)
    return reply.send(result)
  })
  app.post('/modules', async (request, reply) => {
    const result = await controller.createModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/modules/:id', async (request, reply) => {
    const result = await controller.getModulesById(app, request)
    return reply.send(result)
  })
  app.put('/modules/:id', async (request, reply) => {
    const result = await controller.updateModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/modules/:id', async (request, reply) => {
    const result = await controller.deleteModule(app, request)
    return reply.send(result)
  })
}

export default ModulesRoutes
