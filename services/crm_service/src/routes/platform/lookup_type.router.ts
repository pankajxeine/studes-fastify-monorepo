import type { FastifyPluginAsync } from 'fastify'
import { LookupTypeService } from '../../services/platform/lookup_type/LookupTypeService'

const LookupTypeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LookupTypeService()

  app.get('/lookup_type', { config: {"adminPermission":"platform.lookup_type.read"} }, async (request, reply) => {
    const result = await controller.listLookupType(app, request)
    return reply.send(result)
  })
  app.post('/lookup_type', { config: {"adminPermission":"platform.lookup_type.create"} }, async (request, reply) => {
    const result = await controller.createLookupType(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/lookup_type/:lookup_type_id', { config: {"adminPermission":"platform.lookup_type.read"} }, async (request, reply) => {
    const result = await controller.getLookupTypeById(app, request)
    return reply.send(result)
  })
  app.put('/lookup_type/:lookup_type_id', { config: {"adminPermission":"platform.lookup_type.update"} }, async (request, reply) => {
    const result = await controller.updateLookupType(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/lookup_type/:lookup_type_id', { config: {"adminPermission":"platform.lookup_type.delete"} }, async (request, reply) => {
    const result = await controller.deleteLookupType(app, request)
    return reply.send(result)
  })
}

export default LookupTypeRoutes
