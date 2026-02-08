import type { FastifyPluginAsync } from 'fastify'
import { ReportsService } from '../services/ReportsService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const ReportsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ReportsService()
  app.post('/reports/run', async (request, reply) => {
    return await controller.runReport(request.body as any, buildHeaders(request))
  })
}

export default ReportsRoutes
