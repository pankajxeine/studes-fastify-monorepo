import type { FastifyPluginAsync } from 'fastify'
import { IndustryModulesService } from '../services/cpanels/industry_modules/IndustryModulesService'

const IndustryModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IndustryModulesService()
  app.get('/industry_modules', async (request, reply) => {
     return await reply.send(controller.listIndustryModules(app, request))
  })
  app.post('/industry_modules', async (request, reply) => {
     return await reply.send(controller.createIndustryModule(app, request.body as any, request))
  })
  app.get('/industry_modules/:id', async (request, reply) => {
     return await reply.send(controller.getIndustryModulesById(app, request))
  })
  app.put('/industry_modules/:id', async (request, reply) => {
     return await reply.send(controller.updateIndustryModule(app, request.body as any, request))
  })
  app.delete('/industry_modules/:id', async (request, reply) => {
      await controller.deleteIndustryModule(app, request) 

             reply.code(201) 
          
  })
}

export default IndustryModulesRoutes
