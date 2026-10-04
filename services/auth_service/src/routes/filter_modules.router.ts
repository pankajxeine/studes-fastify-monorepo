import type { FastifyPluginAsync } from 'fastify'
import { FilterModulesService } from '../services/cpanel/filter_modules/FilterModulesService'

const FilterModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FilterModulesService()

  app.get('/filter_modules', async (request, reply) => {
    const result = await controller.listFilterModules(app, request)
    return reply.send(result)
  })
  app.post('/filter_modules', async (request, reply) => {
    const result = await controller.createFilterModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/filter_modules/:id', async (request, reply) => {
    const result = await controller.getFilterModulesById(app, request)
    return reply.send(result)
  })
  app.put('/filter_modules/:id', async (request, reply) => {
    const result = await controller.updateFilterModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/filter_modules/:id', async (request, reply) => {
    const result = await controller.deleteFilterModule(app, request)
    return reply.send(result)
  })
}

export default FilterModulesRoutes
