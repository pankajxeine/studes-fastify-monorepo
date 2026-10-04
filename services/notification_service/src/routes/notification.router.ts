import type { FastifyPluginAsync } from 'fastify'
import { NotificationService } from '../services/notification/NotificationService'

const NotificationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NotificationService()

  app.get('/health', async (request, reply) => {
    const result = await controller.notificationHealth(app, request)
    return reply.send(result)
  })
  app.get('/health/db', async (request, reply) => {
    const result = await controller.notificationHealthDb(app, request)
    return reply.send(result)
  })
  app.get('/notifications', async (request, reply) => {
    const result = await controller.listNotifications(app, request)
    return reply.send(result)
  })
  app.post('/notifications', async (request, reply) => {
    const result = await controller.createNotification(app, request.body as any, request)
    return reply.send(result)
  })
}

export default NotificationRoutes
