import type { FastifyPluginAsync } from 'fastify'
import { NotificationPreferenceService } from '../../services/comms/notification_preference/NotificationPreferenceService'

const NotificationPreferenceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NotificationPreferenceService()

  app.get('/notification_preference', async (request, reply) => {
    const result = await controller.listNotificationPreference(app, request)
    return reply.send(result)
  })
  app.post('/notification_preference', async (request, reply) => {
    const result = await controller.createNotificationPreference(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/notification_preference/:id', async (request, reply) => {
    const result = await controller.getNotificationPreferenceById(app, request)
    return reply.send(result)
  })
  app.put('/notification_preference/:id', async (request, reply) => {
    const result = await controller.updateNotificationPreference(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/notification_preference/:id', async (request, reply) => {
    const result = await controller.deleteNotificationPreference(app, request)
    return reply.send(result)
  })
}

export default NotificationPreferenceRoutes
