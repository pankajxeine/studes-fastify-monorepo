import type { FastifyPluginAsync } from 'fastify'
import { IndustryEnvironmentsService } from '../services/cpanels/industry_environments/IndustryEnvironmentsService'

const IndustryEnvironmentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IndustryEnvironmentsService()

  app.get('/industry_environments', async (request, reply) => {
    const result = await controller.listIndustryEnvironments(app, request)
    return reply.send(result)
  })
  app.post('/industry_environments', async (request, reply) => {
    const result = await controller.createIndustryEnvironment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/industry_environments/:id', async (request, reply) => {
    const result = await controller.getIndustryEnvironmentsById(app, request)
    return reply.send(result)
  })
  app.put('/industry_environments/:id', async (request, reply) => {
    const result = await controller.updateIndustryEnvironment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/industry_environments/:id', async (request, reply) => {
    const result = await controller.deleteIndustryEnvironment(app, request)
    return reply.send(result)
  })
}

export default IndustryEnvironmentsRoutes
