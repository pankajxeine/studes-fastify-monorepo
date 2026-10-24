import type { FastifyPluginAsync } from 'fastify'
import { ModuleDependencyService } from '../../services/catalog/module_dependency/ModuleDependencyService'

const ModuleDependencyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ModuleDependencyService()

  app.get('/module_dependency', async (request, reply) => {
    const result = await controller.listModuleDependency(app, request)
    return reply.send(result)
  })
  app.post('/module_dependency', async (request, reply) => {
    const result = await controller.createModuleDependency(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/module_dependency/:id', async (request, reply) => {
    const result = await controller.getModuleDependencyById(app, request)
    return reply.send(result)
  })
  app.put('/module_dependency/:id', async (request, reply) => {
    const result = await controller.updateModuleDependency(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/module_dependency/:id', async (request, reply) => {
    const result = await controller.deleteModuleDependency(app, request)
    return reply.send(result)
  })
}

export default ModuleDependencyRoutes
