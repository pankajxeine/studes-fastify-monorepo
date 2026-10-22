import type { FastifyPluginAsync } from 'fastify'
import { RolesService } from '../services/cpanels/roles/RolesService'

const RolesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RolesService()

  app.get('/roles', async (request, reply) => {
    const result = await controller.listRoles(app, request)
    return reply.send(result)
  })
  app.post('/roles', async (request, reply) => {
    const result = await controller.createRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/roles/:id', async (request, reply) => {
    const result = await controller.getRolesById(app, request)
    return reply.send(result)
  })
  app.put('/roles/:id', async (request, reply) => {
    const result = await controller.updateRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/roles/:id', async (request, reply) => {
    const result = await controller.deleteRole(app, request)
    return reply.send(result)
  })
}

export default RolesRoutes
