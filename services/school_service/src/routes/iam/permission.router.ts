import type { FastifyPluginAsync } from 'fastify'
import { PermissionService } from '../../services/iam/permission/PermissionService'

const PermissionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PermissionService()

  app.get('/permission', async (request, reply) => {
    const result = await controller.listPermission(app, request)
    return reply.send(result)
  })
  app.post('/permission', async (request, reply) => {
    const result = await controller.createPermission(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/permission/:id', async (request, reply) => {
    const result = await controller.getPermissionById(app, request)
    return reply.send(result)
  })
  app.put('/permission/:id', async (request, reply) => {
    const result = await controller.updatePermission(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/permission/:id', async (request, reply) => {
    const result = await controller.deletePermission(app, request)
    return reply.send(result)
  })
}

export default PermissionRoutes
