import type { FastifyPluginAsync } from 'fastify'
import { AssignmentsService } from '../services/AssignmentsService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const AssignmentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AssignmentsService()
  app.get('/assignments', async (request, reply) => {
    return await controller.listAssignments(buildHeaders(request))
  })
  app.post('/assignments', async (request, reply) => {
    return await controller.createAssignment(request.body as any, buildHeaders(request))
  })
  app.post('/assignments/:id/submissions', async (request, reply) => {
    return await controller.submitAssignment(request.body as any, buildHeaders(request))
  })
}

export default AssignmentsRoutes
