import type { FastifyPluginAsync } from 'fastify'
import { IndustryModulesService } from '../services/cpanel/industry_modules/IndustryModulesService'

const IndustryModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IndustryModulesService()

  app.get('/industry_modules', async (request, reply) => {
    const result = await controller.listIndustryModules(app, request)
    return reply.send(result)
  })
  app.post('/industry_modules', async (request, reply) => {
    const result = await controller.createIndustryModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/industry_modules/:id', async (request, reply) => {
    const result = await controller.getIndustryModulesById(app, request)
    return reply.send(result)
  })
  app.put('/industry_modules/:id', async (request, reply) => {
    const result = await controller.updateIndustryModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/industry_modules/:id', async (request, reply) => {
    const result = await controller.deleteIndustryModule(app, request)
    return reply.send(result)
  })
}

export default IndustryModulesRoutes
