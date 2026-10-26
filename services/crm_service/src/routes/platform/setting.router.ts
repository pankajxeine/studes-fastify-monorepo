import type { FastifyPluginAsync } from 'fastify'
import { SettingService } from '../../services/platform/setting/SettingService'

const SettingRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SettingService()

  app.get('/setting', { config: {"adminPermission":"platform.setting.read"} }, async (request, reply) => {
    const result = await controller.listSetting(app, request)
    return reply.send(result)
  })
  app.post('/setting', { config: {"adminPermission":"platform.setting.create"} }, async (request, reply) => {
    const result = await controller.createSetting(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/setting/:setting_id', { config: {"adminPermission":"platform.setting.read"} }, async (request, reply) => {
    const result = await controller.getSettingById(app, request)
    return reply.send(result)
  })
  app.put('/setting/:setting_id', { config: {"adminPermission":"platform.setting.update"} }, async (request, reply) => {
    const result = await controller.updateSetting(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/setting/:setting_id', { config: {"adminPermission":"platform.setting.delete"} }, async (request, reply) => {
    const result = await controller.deleteSetting(app, request)
    return reply.send(result)
  })
}

export default SettingRoutes
