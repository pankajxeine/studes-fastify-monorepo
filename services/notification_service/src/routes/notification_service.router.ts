import type { FastifyPluginAsync } from 'fastify'
import { NotificationServiceService } from '../services/NotificationServiceService'

const NotificationServiceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NotificationServiceService()
  app.get('/health', async (request, reply) => {
    return await controller.notificationHealth(app, request)
  })
  app.get('/health/db', async (request, reply) => {
    return await controller.notificationHealthDb(app, request)
  })
  app.get('/notifications', async (request, reply) => {
    return await controller.listNotifications(app, request)
  })
  app.post('/notifications', async (request, reply) => {
    return await controller.createNotification(app, request.body as any, request)
  })
}

export default NotificationServiceRoutes
