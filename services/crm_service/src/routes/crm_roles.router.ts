import type { FastifyPluginAsync } from 'fastify'
import { CrmRolesService } from '../services/crm_roles/CrmRolesService'

const CrmRolesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmRolesService()

  app.get('/crm/roles', async (request, reply) => {
    const result = await controller.listCrmRoles(app, request)
    return reply.send(result)
  })
  app.post('/crm/roles', async (request, reply) => {
    const result = await controller.createCrmRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm/roles/:roleId', async (request, reply) => {
    const result = await controller.getCrmRole(app, request)
    return reply.send(result)
  })
  app.patch('/crm/roles/:roleId', async (request, reply) => {
    const result = await controller.updateCrmRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm/roles/:roleId', async (request, reply) => {
    const result = await controller.deleteCrmRole(app, request)
    return reply.send(result)
  })
}

export default CrmRolesRoutes
