import type { FastifyPluginAsync } from 'fastify'
import { CompanyService } from '../services/CompanyService'

const CompanyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CompanyService()
  app.get('/company', async (request, reply) => {
    return await controller.getCompanyProfile(app, request)
  })
  app.put('/company', async (request, reply) => {
    return await controller.updateCompanyProfile(app, request.body as any, request)
  })
}

export default CompanyRoutes
