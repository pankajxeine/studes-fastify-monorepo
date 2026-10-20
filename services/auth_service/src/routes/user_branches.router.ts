import type { FastifyPluginAsync } from 'fastify'
import { UserBranchesService } from '../services/cpanels/user_branches/UserBranchesService'

const UserBranchesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserBranchesService()

  app.get('/user_branches', async (request, reply) => {
    const result = await controller.listUserBranches(app, request)
    return reply.send(result)
  })
  app.post('/user_branches', async (request, reply) => {
    const result = await controller.createUserBranche(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_branches/:id', async (request, reply) => {
    const result = await controller.getUserBranchesById(app, request)
    return reply.send(result)
  })
  app.put('/user_branches/:id', async (request, reply) => {
    const result = await controller.updateUserBranche(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_branches/:id', async (request, reply) => {
    const result = await controller.deleteUserBranche(app, request)
    return reply.send(result)
  })
}

export default UserBranchesRoutes
