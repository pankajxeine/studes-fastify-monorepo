import type { FastifyPluginAsync } from 'fastify'
import { BranchesService } from '../services/cpanels/branches/BranchesService'

const BranchesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BranchesService()

  app.get('/branches', async (request, reply) => {
    const result = await controller.listBranches(app, request)
    return reply.send(result)
  })
  app.post('/branches', async (request, reply) => {
    const result = await controller.createBranche(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/branches/:id', async (request, reply) => {
    const result = await controller.getBranchesById(app, request)
    return reply.send(result)
  })
  app.put('/branches/:id', async (request, reply) => {
    const result = await controller.updateBranche(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/branches/:id', async (request, reply) => {
    const result = await controller.deleteBranche(app, request)
    return reply.send(result)
  })
}

export default BranchesRoutes
