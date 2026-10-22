import type { FastifyPluginAsync } from 'fastify'
import { FilterModuleFieldsService } from '../services/cpanels/filter_module_fields/FilterModuleFieldsService'

const FilterModuleFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FilterModuleFieldsService()

  app.get('/filter_module_fields', async (request, reply) => {
    const result = await controller.listFilterModuleFields(app, request)
    return reply.send(result)
  })
  app.post('/filter_module_fields', async (request, reply) => {
    const result = await controller.createFilterModuleField(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/filter_module_fields/:id', async (request, reply) => {
    const result = await controller.getFilterModuleFieldsById(app, request)
    return reply.send(result)
  })
  app.put('/filter_module_fields/:id', async (request, reply) => {
    const result = await controller.updateFilterModuleField(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/filter_module_fields/:id', async (request, reply) => {
    const result = await controller.deleteFilterModuleField(app, request)
    return reply.send(result)
  })
}

export default FilterModuleFieldsRoutes
