import type { FastifyPluginAsync } from 'fastify'
import { BranchesService } from '../services/BranchesService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const BranchesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BranchesService()
  app.get('/branches', async (request, reply) => {
    return await controller.listBranches(buildHeaders(request))
  })
  app.post('/branches', async (request, reply) => {
    return await controller.createBranch(request.body as any, buildHeaders(request))
  })
  app.patch('/branches/:branchId', async (request, reply) => {
    return await controller.updateBranch(request.body as any, buildHeaders(request))
  })
}

export default BranchesRoutes
