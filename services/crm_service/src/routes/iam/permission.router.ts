import type { FastifyPluginAsync } from 'fastify'
import { PermissionService } from '../../services/iam/permission/PermissionService'

const PermissionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PermissionService()

  app.get('/permission', { config: {"adminPermission":"iam.permission.read"} }, async (request, reply) => {
    const result = await controller.listPermission(app, request)
    return reply.send(result)
  })
  app.post('/permission', { config: {"adminPermission":"iam.permission.create"} }, async (request, reply) => {
    const result = await controller.createPermission(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/permission/:permission_id', { config: {"adminPermission":"iam.permission.read"} }, async (request, reply) => {
    const result = await controller.getPermissionById(app, request)
    return reply.send(result)
  })
  app.put('/permission/:permission_id', { config: {"adminPermission":"iam.permission.update"} }, async (request, reply) => {
    const result = await controller.updatePermission(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/permission/:permission_id', { config: {"adminPermission":"iam.permission.delete"} }, async (request, reply) => {
    const result = await controller.deletePermission(app, request)
    return reply.send(result)
  })
}

export default PermissionRoutes
