import type { FastifyPluginAsync } from 'fastify'
import { ModuleDependencyService } from '../../services/catalog/module_dependency/ModuleDependencyService'

const ModuleDependencyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ModuleDependencyService()

  app.get('/module_dependency', { config: {"adminPermission":"catalog.module_dependency.read"} }, async (request, reply) => {
    const result = await controller.listModuleDependency(app, request)
    return reply.send(result)
  })
  app.post('/module_dependency', { config: {"adminPermission":"catalog.module_dependency.create"} }, async (request, reply) => {
    const result = await controller.createModuleDependency(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/module_dependency/:module_dependency_id', { config: {"adminPermission":"catalog.module_dependency.read"} }, async (request, reply) => {
    const result = await controller.getModuleDependencyById(app, request)
    return reply.send(result)
  })
  app.put('/module_dependency/:module_dependency_id', { config: {"adminPermission":"catalog.module_dependency.update"} }, async (request, reply) => {
    const result = await controller.updateModuleDependency(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/module_dependency/:module_dependency_id', { config: {"adminPermission":"catalog.module_dependency.delete"} }, async (request, reply) => {
    const result = await controller.deleteModuleDependency(app, request)
    return reply.send(result)
  })
}

export default ModuleDependencyRoutes
