import type { FastifyPluginAsync } from 'fastify'
import { CrmRolesService } from '../services/CrmRolesService'

const CrmRolesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmRolesService()
  app.get('/crm/roles', async (request, reply) => {
    return await controller.listCrmRoles(app, request)
  })
  app.post('/crm/roles', async (request, reply) => {
    return await controller.createCrmRole(app, request.body as any, request)
  })
  app.get('/crm/roles/:roleId', async (request, reply) => {
    return await controller.getCrmRole(app, request)
  })
  app.patch('/crm/roles/:roleId', async (request, reply) => {
    return await controller.updateCrmRole(app, request.body as any, request)
  })
  app.delete('/crm/roles/:roleId', async (request, reply) => {
    await controller.deleteCrmRole(app, request)
  })
}

export default CrmRolesRoutes
