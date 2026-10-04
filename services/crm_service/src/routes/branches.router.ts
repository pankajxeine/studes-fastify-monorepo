import type { FastifyPluginAsync } from 'fastify'
import { BranchesService } from '../services/branches/BranchesService'

const BranchesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BranchesService()

  app.get('/branches', async (request, reply) => {
    const result = await controller.listBranches(app, request)
    return reply.send(result)
  })
  app.post('/branches', async (request, reply) => {
    const result = await controller.createBranch(app, request.body as any, request)
    return reply.send(result)
  })
  app.patch('/branches/:branchId', async (request, reply) => {
    const result = await controller.updateBranch(app, request.body as any, request)
    return reply.send(result)
  })
}

export default BranchesRoutes
