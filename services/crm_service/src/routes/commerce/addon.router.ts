import type { FastifyPluginAsync } from 'fastify'
import { AddonService } from '../../services/commerce/addon/AddonService'

const AddonRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AddonService()

  app.get('/addon', { config: {"adminPermission":"commerce.addon.read"} }, async (request, reply) => {
    const result = await controller.listAddon(app, request)
    return reply.send(result)
  })
  app.post('/addon', { config: {"adminPermission":"commerce.addon.create"} }, async (request, reply) => {
    const result = await controller.createAddon(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/addon/:addon_id', { config: {"adminPermission":"commerce.addon.read"} }, async (request, reply) => {
    const result = await controller.getAddonById(app, request)
    return reply.send(result)
  })
  app.put('/addon/:addon_id', { config: {"adminPermission":"commerce.addon.update"} }, async (request, reply) => {
    const result = await controller.updateAddon(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/addon/:addon_id', { config: {"adminPermission":"commerce.addon.delete"} }, async (request, reply) => {
    const result = await controller.deleteAddon(app, request)
    return reply.send(result)
  })
}

export default AddonRoutes
