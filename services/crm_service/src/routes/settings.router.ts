import type { FastifyPluginAsync } from 'fastify'
import { SettingsService } from '../services/settings/SettingsService'

const SettingsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SettingsService()

  app.get('/settings/global', async (request, reply) => {
    const result = await controller.getGlobalSettings(app, request)
    return reply.send(result)
  })
  app.put('/settings/global', async (request, reply) => {
    const result = await controller.updateGlobalSettings(app, request.body as any, request)
    return reply.send(result)
  })
}

export default SettingsRoutes
