import type { FastifyPluginAsync } from 'fastify'
import { CrmUsersService } from '../services/CrmUsersService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const CrmUsersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmUsersService()
  app.get('/crm/users', async (request, reply) => {
    return await controller.listCrmUsers(buildHeaders(request))
  })
  app.post('/crm/users', async (request, reply) => {
    return await controller.createCrmUser(request.body as any, buildHeaders(request))
  })
  app.get('/crm/users/:userId', async (request, reply) => {
    return await controller.getCrmUser(buildHeaders(request))
  })
  app.patch('/crm/users/:userId', async (request, reply) => {
    return await controller.updateCrmUser(request.body as any, buildHeaders(request))
  })
  app.delete('/crm/users/:userId', async (request, reply) => {
    await controller.deleteCrmUser(buildHeaders(request))
  })
}

export default CrmUsersRoutes
