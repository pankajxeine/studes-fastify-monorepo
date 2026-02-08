import type { FastifyPluginAsync } from 'fastify'
import { FeesService } from '../services/FeesService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const FeesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeesService()
  app.get('/fees/structures', async (request, reply) => {
    return await controller.listFeeStructures(buildHeaders(request))
  })
  app.post('/fees/structures', async (request, reply) => {
    return await controller.createFeeStructure(request.body as any, buildHeaders(request))
  })
  app.post('/fees/assignments', async (request, reply) => {
    return await controller.assignFeeToStudent(request.body as any, buildHeaders(request))
  })
  app.post('/fees/payments', async (request, reply) => {
    return await controller.recordFeePayment(request.body as any, buildHeaders(request))
  })
}

export default FeesRoutes
