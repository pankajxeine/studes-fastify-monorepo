import type { FastifyPluginAsync } from 'fastify'
import { IndustryService } from '../../services/platform/industry/IndustryService'

const IndustryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IndustryService()

  app.get('/industry', { config: {"adminPermission":"platform.industry.read"} }, async (request, reply) => {
    const result = await controller.listIndustry(app, request)
    return reply.send(result)
  })
  app.post('/industry', { config: {"adminPermission":"platform.industry.create"} }, async (request, reply) => {
    const result = await controller.createIndustry(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/industry/:industry_id', { config: {"adminPermission":"platform.industry.read"} }, async (request, reply) => {
    const result = await controller.getIndustryById(app, request)
    return reply.send(result)
  })
  app.put('/industry/:industry_id', { config: {"adminPermission":"platform.industry.update"} }, async (request, reply) => {
    const result = await controller.updateIndustry(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/industry/:industry_id', { config: {"adminPermission":"platform.industry.delete"} }, async (request, reply) => {
    const result = await controller.deleteIndustry(app, request)
    return reply.send(result)
  })
}

export default IndustryRoutes
