import type { FastifyPluginAsync } from 'fastify'
import { BranchesService } from '../services/BranchesService'

const BranchesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BranchesService()
  app.get('/branches', async (request, reply) => {
    return await controller.listBranches(app, request)
  })
  app.post('/branches', async (request, reply) => {
    return await controller.createBranch(app, request.body as any, request)
  })
  app.patch('/branches/:branchId', async (request, reply) => {
    return await controller.updateBranch(app, request.body as any, request)
  })
}

export default BranchesRoutes
