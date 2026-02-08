import type { FastifyPluginAsync } from 'fastify'
import { NotificationServiceService } from '../services/NotificationServiceService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const NotificationServiceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NotificationServiceService()
  app.get('/health', async (request, reply) => {
    return await controller.notificationHealth(buildHeaders(request))
  })
  app.get('/health/db', async (request, reply) => {
    return await controller.notificationHealthDb(buildHeaders(request))
  })
  app.get('/notifications', async (request, reply) => {
    return await controller.listNotifications(buildHeaders(request))
  })
  app.post('/notifications', async (request, reply) => {
    return await controller.createNotification(request.body as any, buildHeaders(request))
  })
}

export default NotificationServiceRoutes
