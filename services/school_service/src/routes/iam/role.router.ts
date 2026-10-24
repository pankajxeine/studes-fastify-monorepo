import type { FastifyPluginAsync } from 'fastify'
import { RoleService } from '../../services/iam/role/RoleService'

const RoleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoleService()

  app.get('/role', async (request, reply) => {
    const result = await controller.listRole(app, request)
    return reply.send(result)
  })
  app.post('/role', async (request, reply) => {
    const result = await controller.createRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/role/:id', async (request, reply) => {
    const result = await controller.getRoleById(app, request)
    return reply.send(result)
  })
  app.put('/role/:id', async (request, reply) => {
    const result = await controller.updateRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/role/:id', async (request, reply) => {
    const result = await controller.deleteRole(app, request)
    return reply.send(result)
  })
}

export default RoleRoutes
