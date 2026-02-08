import type { FastifyPluginAsync } from 'fastify'
import { NotificationsService } from '../services/NotificationsService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const NotificationsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NotificationsService()
  app.get('/notifications', async (request, reply) => {
    return await controller.listNotifications(buildHeaders(request))
  })
  app.post('/notifications', async (request, reply) => {
    return await controller.createNotification(request.body as any, buildHeaders(request))
  })
}

export default NotificationsRoutes
