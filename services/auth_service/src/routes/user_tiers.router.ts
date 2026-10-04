import type { FastifyPluginAsync } from 'fastify'
import { UserTiersService } from '../services/cpanel/user_tiers/UserTiersService'

const UserTiersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserTiersService()

  app.get('/user_tiers', async (request, reply) => {
    const result = await controller.listUserTiers(app, request)
    return reply.send(result)
  })
  app.post('/user_tiers', async (request, reply) => {
    const result = await controller.createUserTier(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_tiers/:id', async (request, reply) => {
    const result = await controller.getUserTiersById(app, request)
    return reply.send(result)
  })
  app.put('/user_tiers/:id', async (request, reply) => {
    const result = await controller.updateUserTier(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_tiers/:id', async (request, reply) => {
    const result = await controller.deleteUserTier(app, request)
    return reply.send(result)
  })
}

export default UserTiersRoutes
