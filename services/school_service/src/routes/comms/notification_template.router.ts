import type { FastifyPluginAsync } from 'fastify'
import { NotificationTemplateService } from '../../services/comms/notification_template/NotificationTemplateService'

const NotificationTemplateRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NotificationTemplateService()

  app.get('/notification_template', async (request, reply) => {
    const result = await controller.listNotificationTemplate(app, request)
    return reply.send(result)
  })
  app.post('/notification_template', async (request, reply) => {
    const result = await controller.createNotificationTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/notification_template/:id', async (request, reply) => {
    const result = await controller.getNotificationTemplateById(app, request)
    return reply.send(result)
  })
  app.put('/notification_template/:id', async (request, reply) => {
    const result = await controller.updateNotificationTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/notification_template/:id', async (request, reply) => {
    const result = await controller.deleteNotificationTemplate(app, request)
    return reply.send(result)
  })
}

export default NotificationTemplateRoutes
