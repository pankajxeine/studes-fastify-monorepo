import type { FastifyPluginAsync } from 'fastify'
import { EmailSettingsService } from '../services/EmailSettingsService'

const EmailSettingsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmailSettingsService()
  app.get('/email/settings', async (request, reply) => {
    return await controller.getEmailSettings(app, request)
  })
  app.put('/email/settings', async (request, reply) => {
    return await controller.updateEmailSettings(app, request.body as any, request)
  })
}

export default EmailSettingsRoutes
