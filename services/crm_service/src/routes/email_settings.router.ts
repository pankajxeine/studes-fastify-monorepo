import type { FastifyPluginAsync } from 'fastify'
import { EmailSettingsService } from '../services/email_settings/EmailSettingsService'

const EmailSettingsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmailSettingsService()

  app.get('/email/settings', async (request, reply) => {
    const result = await controller.getEmailSettings(app, request)
    return reply.send(result)
  })
  app.put('/email/settings', async (request, reply) => {
    const result = await controller.updateEmailSettings(app, request.body as any, request)
    return reply.send(result)
  })
}

export default EmailSettingsRoutes
