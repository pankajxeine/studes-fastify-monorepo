import type { FastifyPluginAsync } from 'fastify'
import { UserRoleService } from '../../services/iam/user_role/UserRoleService'

const UserRoleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserRoleService()

  app.get('/user_role', { config: {"adminPermission":"iam.user_role.read"} }, async (request, reply) => {
    const result = await controller.listUserRole(app, request)
    return reply.send(result)
  })
  app.post('/user_role', { config: {"adminPermission":"iam.user_role.create"} }, async (request, reply) => {
    const result = await controller.createUserRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_role/:user_role_id', { config: {"adminPermission":"iam.user_role.read"} }, async (request, reply) => {
    const result = await controller.getUserRoleById(app, request)
    return reply.send(result)
  })
  app.put('/user_role/:user_role_id', { config: {"adminPermission":"iam.user_role.update"} }, async (request, reply) => {
    const result = await controller.updateUserRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_role/:user_role_id', { config: {"adminPermission":"iam.user_role.delete"} }, async (request, reply) => {
    const result = await controller.deleteUserRole(app, request)
    return reply.send(result)
  })
}

export default UserRoleRoutes
