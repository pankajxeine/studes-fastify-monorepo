import type { FastifyPluginAsync } from 'fastify'
import { ModuleFieldsService } from '../services/cpanel/module_fields/ModuleFieldsService'

const ModuleFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ModuleFieldsService()

  app.get('/module_fields', async (request, reply) => {
    const result = await controller.listModuleFields(app, request)
    return reply.send(result)
  })
  app.post('/module_fields', async (request, reply) => {
    const result = await controller.createModuleField(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/module_fields/:id', async (request, reply) => {
    const result = await controller.getModuleFieldsById(app, request)
    return reply.send(result)
  })
  app.put('/module_fields/:id', async (request, reply) => {
    const result = await controller.updateModuleField(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/module_fields/:id', async (request, reply) => {
    const result = await controller.deleteModuleField(app, request)
    return reply.send(result)
  })
}

export default ModuleFieldsRoutes
