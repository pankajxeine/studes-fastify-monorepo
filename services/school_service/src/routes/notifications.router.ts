import type { FastifyPluginAsync } from 'fastify'
import { NotificationsService } from '../services/NotificationsService'

const NotificationsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NotificationsService()
  app.get('/notifications', async (request, reply) => {
    return await controller.listNotifications(app, request)
  })
  app.post('/notifications', async (request, reply) => {
    return await controller.createNotification(app, request.body as any, request)
  })
}

export default NotificationsRoutes
