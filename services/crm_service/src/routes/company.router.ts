import type { FastifyPluginAsync } from 'fastify'
import { CompanyService } from '../services/CompanyService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const CompanyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CompanyService()
  app.get('/company', async (request, reply) => {
    return await controller.getCompanyProfile(buildHeaders(request))
  })
  app.put('/company', async (request, reply) => {
    return await controller.updateCompanyProfile(request.body as any, buildHeaders(request))
  })
}

export default CompanyRoutes
