import type { FastifyPluginAsync } from 'fastify'
import { UserRoleService } from '../../services/iam/user_role/UserRoleService'

const UserRoleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserRoleService()

  app.get('/user_role', async (request, reply) => {
    const result = await controller.listUserRole(app, request)
    return reply.send(result)
  })
  app.post('/user_role', async (request, reply) => {
    const result = await controller.createUserRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_role/:id', async (request, reply) => {
    const result = await controller.getUserRoleById(app, request)
    return reply.send(result)
  })
  app.put('/user_role/:id', async (request, reply) => {
    const result = await controller.updateUserRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_role/:id', async (request, reply) => {
    const result = await controller.deleteUserRole(app, request)
    return reply.send(result)
  })
}

export default UserRoleRoutes
