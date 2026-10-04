import type { FastifyPluginAsync } from 'fastify'
import { CrmUsersService } from '../services/crm_users/CrmUsersService'

const CrmUsersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmUsersService()

  app.get('/crm/users', async (request, reply) => {
    const result = await controller.listCrmUsers(app, request)
    return reply.send(result)
  })
  app.post('/crm/users', async (request, reply) => {
    const result = await controller.createCrmUser(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm/users/:userId', async (request, reply) => {
    const result = await controller.getCrmUser(app, request)
    return reply.send(result)
  })
  app.patch('/crm/users/:userId', async (request, reply) => {
    const result = await controller.updateCrmUser(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm/users/:userId', async (request, reply) => {
    const result = await controller.deleteCrmUser(app, request)
    return reply.send(result)
  })
}

export default CrmUsersRoutes
