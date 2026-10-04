import type { FastifyPluginAsync } from 'fastify'
import { CompanyService } from '../services/company/CompanyService'

const CompanyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CompanyService()

  app.get('/company', async (request, reply) => {
    const result = await controller.getCompanyProfile(app, request)
    return reply.send(result)
  })
  app.put('/company', async (request, reply) => {
    const result = await controller.updateCompanyProfile(app, request.body as any, request)
    return reply.send(result)
  })
}

export default CompanyRoutes
