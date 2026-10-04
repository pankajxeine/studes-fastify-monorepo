import type { FastifyPluginAsync } from 'fastify'
import { UserAlertsService } from '../services/cpanel/user_alerts/UserAlertsService'

const UserAlertsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserAlertsService()

  app.get('/user_alerts', async (request, reply) => {
    const result = await controller.listUserAlerts(app, request)
    return reply.send(result)
  })
  app.post('/user_alerts', async (request, reply) => {
    const result = await controller.createUserAlert(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_alerts/:id', async (request, reply) => {
    const result = await controller.getUserAlertsById(app, request)
    return reply.send(result)
  })
  app.put('/user_alerts/:id', async (request, reply) => {
    const result = await controller.updateUserAlert(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_alerts/:id', async (request, reply) => {
    const result = await controller.deleteUserAlert(app, request)
    return reply.send(result)
  })
}

export default UserAlertsRoutes
