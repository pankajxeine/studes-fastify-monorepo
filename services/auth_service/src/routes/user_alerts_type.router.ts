import type { FastifyPluginAsync } from 'fastify'
import { UserAlertsTypeService } from '../services/cpanel/user_alerts_type/UserAlertsTypeService'

const UserAlertsTypeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserAlertsTypeService()

  app.get('/user_alerts_type', async (request, reply) => {
    const result = await controller.listUserAlertsType(app, request)
    return reply.send(result)
  })
  app.post('/user_alerts_type', async (request, reply) => {
    const result = await controller.createUserAlertsType(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_alerts_type/:id', async (request, reply) => {
    const result = await controller.getUserAlertsTypeById(app, request)
    return reply.send(result)
  })
  app.put('/user_alerts_type/:id', async (request, reply) => {
    const result = await controller.updateUserAlertsType(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_alerts_type/:id', async (request, reply) => {
    const result = await controller.deleteUserAlertsType(app, request)
    return reply.send(result)
  })
}

export default UserAlertsTypeRoutes
