import type { FastifyPluginAsync } from 'fastify'
import { ModuleService } from '../../services/catalog/module/ModuleService'

const ModuleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ModuleService()

  app.get('/module', async (request, reply) => {
    const result = await controller.listModule(app, request)
    return reply.send(result)
  })
  app.post('/module', async (request, reply) => {
    const result = await controller.createModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/module/:id', async (request, reply) => {
    const result = await controller.getModuleById(app, request)
    return reply.send(result)
  })
  app.put('/module/:id', async (request, reply) => {
    const result = await controller.updateModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/module/:id', async (request, reply) => {
    const result = await controller.deleteModule(app, request)
    return reply.send(result)
  })
}

export default ModuleRoutes
