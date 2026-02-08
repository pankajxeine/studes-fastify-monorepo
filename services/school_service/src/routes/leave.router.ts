import type { FastifyPluginAsync } from 'fastify'
import { LeaveService } from '../services/LeaveService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const LeaveRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LeaveService()
  app.get('/leave', async (request, reply) => {
    return await controller.listLeaveRequests(buildHeaders(request))
  })
  app.post('/leave', async (request, reply) => {
    return await controller.createLeaveRequest(request.body as any, buildHeaders(request))
  })
}

export default LeaveRoutes
