import type { FastifyPluginAsync } from 'fastify'
import { CrmUsersService } from '../services/CrmUsersService'

const CrmUsersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmUsersService()
  app.get('/crm/users', async (request, reply) => {
    return await controller.listCrmUsers(app, request)
  })
  app.post('/crm/users', async (request, reply) => {
    return await controller.createCrmUser(app, request.body as any, request)
  })
  app.get('/crm/users/:userId', async (request, reply) => {
    return await controller.getCrmUser(app, request)
  })
  app.patch('/crm/users/:userId', async (request, reply) => {
    return await controller.updateCrmUser(app, request.body as any, request)
  })
  app.delete('/crm/users/:userId', async (request, reply) => {
    await controller.deleteCrmUser(app, request)
  })
}

export default CrmUsersRoutes
