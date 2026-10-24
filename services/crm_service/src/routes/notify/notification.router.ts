import type { FastifyPluginAsync } from 'fastify'
import { NotificationService } from '../../services/notify/notification/NotificationService'

const NotificationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NotificationService()

  app.get('/notification', async (request, reply) => {
    const result = await controller.listNotification(app, request)
    return reply.send(result)
  })
  app.post('/notification', async (request, reply) => {
    const result = await controller.createNotification(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/notification/:id', async (request, reply) => {
    const result = await controller.getNotificationById(app, request)
    return reply.send(result)
  })
  app.put('/notification/:id', async (request, reply) => {
    const result = await controller.updateNotification(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/notification/:id', async (request, reply) => {
    const result = await controller.deleteNotification(app, request)
    return reply.send(result)
  })
}

export default NotificationRoutes
