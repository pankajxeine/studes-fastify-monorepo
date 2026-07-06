import type { FastifyPluginAsync } from 'fastify'
import { IndustryEnvironmentsService } from '../services/cpanel/industry_environments/IndustryEnvironmentsService'

const IndustryEnvironmentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IndustryEnvironmentsService()

  app.get('/industry_environments', async (request, reply) => {
    
    return await reply.send(controller.listIndustryEnvironments(app, request))
  })
  app.post('/industry_environments', async (request, reply) => {
    return await reply.send(controller.createIndustryEnvironment(app, request.body as any, request))
  })
  app.get('/industry_environments/:id', async (request, reply) => {
    
    return await reply.send(controller.getIndustryEnvironmentsById(app, request))
  })
  app.put('/industry_environments/:id', async (request, reply) => {
    return await reply.send(controller.updateIndustryEnvironment(app, request.body as any, request))
  })
  app.delete('/industry_environments/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteIndustryEnvironment(app, request))
  })
}

export default IndustryEnvironmentsRoutes
