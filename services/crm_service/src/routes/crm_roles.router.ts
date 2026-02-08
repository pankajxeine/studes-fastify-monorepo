import type { FastifyPluginAsync } from 'fastify'
import { CrmRolesService } from '../services/CrmRolesService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const CrmRolesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmRolesService()
  app.get('/crm/roles', async (request, reply) => {
    return await controller.listCrmRoles(buildHeaders(request))
  })
  app.post('/crm/roles', async (request, reply) => {
    return await controller.createCrmRole(request.body as any, buildHeaders(request))
  })
  app.get('/crm/roles/:roleId', async (request, reply) => {
    return await controller.getCrmRole(buildHeaders(request))
  })
  app.patch('/crm/roles/:roleId', async (request, reply) => {
    return await controller.updateCrmRole(request.body as any, buildHeaders(request))
  })
  app.delete('/crm/roles/:roleId', async (request, reply) => {
    await controller.deleteCrmRole(buildHeaders(request))
  })
}

export default CrmRolesRoutes
