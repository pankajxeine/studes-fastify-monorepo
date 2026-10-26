import type { FastifyPluginAsync } from 'fastify'
import { BranchService } from '../../services/org/branch/BranchService'

const BranchRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BranchService()

  app.get('/branch', { config: {"adminPermission":"org.branch.read"} }, async (request, reply) => {
    const result = await controller.listBranch(app, request)
    return reply.send(result)
  })
  app.post('/branch', { config: {"adminPermission":"org.branch.create"} }, async (request, reply) => {
    const result = await controller.createBranch(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/branch/:branch_id', { config: {"adminPermission":"org.branch.read"} }, async (request, reply) => {
    const result = await controller.getBranchById(app, request)
    return reply.send(result)
  })
  app.put('/branch/:branch_id', { config: {"adminPermission":"org.branch.update"} }, async (request, reply) => {
    const result = await controller.updateBranch(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/branch/:branch_id', { config: {"adminPermission":"org.branch.delete"} }, async (request, reply) => {
    const result = await controller.deleteBranch(app, request)
    return reply.send(result)
  })
}

export default BranchRoutes
