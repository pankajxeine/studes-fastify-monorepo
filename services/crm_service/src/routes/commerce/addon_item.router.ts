import type { FastifyPluginAsync } from 'fastify'
import { AddonItemService } from '../../services/commerce/addon_item/AddonItemService'

const AddonItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AddonItemService()

  app.get('/addon_item', { config: {"adminPermission":"commerce.addon_item.read"} }, async (request, reply) => {
    const result = await controller.listAddonItem(app, request)
    return reply.send(result)
  })
  app.post('/addon_item', { config: {"adminPermission":"commerce.addon_item.create"} }, async (request, reply) => {
    const result = await controller.createAddonItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/addon_item/:addon_item_id', { config: {"adminPermission":"commerce.addon_item.read"} }, async (request, reply) => {
    const result = await controller.getAddonItemById(app, request)
    return reply.send(result)
  })
  app.put('/addon_item/:addon_item_id', { config: {"adminPermission":"commerce.addon_item.update"} }, async (request, reply) => {
    const result = await controller.updateAddonItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/addon_item/:addon_item_id', { config: {"adminPermission":"commerce.addon_item.delete"} }, async (request, reply) => {
    const result = await controller.deleteAddonItem(app, request)
    return reply.send(result)
  })
}

export default AddonItemRoutes
