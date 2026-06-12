import type { FastifyPluginAsync } from 'fastify'
import { SettingsService } from '../services/SettingsService'

const SettingsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SettingsService()
  app.get('/settings/global', async (request, reply) => {
    return await controller.getGlobalSettings(app, request)
  })
  app.put('/settings/global', async (request, reply) => {
    return await controller.updateGlobalSettings(app, request.body as any, request)
  })
}

export default SettingsRoutes
