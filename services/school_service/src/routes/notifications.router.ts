import type { FastifyPluginAsync } from 'fastify'
import { NotificationsService } from '../services/notifications/NotificationsService'

const NotificationsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NotificationsService()

  app.get('/notifications', async (request, reply) => {
    const result = await controller.listNotifications(app, request)
    return reply.send(result)
  })
  app.post('/notifications', async (request, reply) => {
    const result = await controller.createNotification(app, request.body as any, request)
    return reply.send(result)
  })
}

export default NotificationsRoutes
