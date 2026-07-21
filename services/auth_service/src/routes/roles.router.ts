import type { FastifyPluginAsync } from 'fastify'
import { RolesService } from '../services/cpanel/roles/RolesService'

const RolesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RolesService()

  app.get('/roles', async (request, reply) => {

    return await reply.send(controller.listRoles(app, request))
  })
  app.post('/roles', async (request, reply) => {
    return await reply.send(controller.createRole(app, request.body as any, request))
  })
  app.get('/roles/:id', async (request, reply) => {

    return await reply.send(controller.getRolesById(app, request))
  })
  app.put('/roles/:id', async (request, reply) => {
    return await reply.send(controller.updateRole(app, request.body as any, request))
  })
  app.delete('/roles/:id', async (request, reply) => {

    return await reply.send(controller.deleteRole(app, request))
  })
}

export default RolesRoutes
