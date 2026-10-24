import type { FastifyPluginAsync } from 'fastify'
import { AddonItemService } from '../../services/commerce/addon_item/AddonItemService'

const AddonItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AddonItemService()

  app.get('/addon_item', async (request, reply) => {
    const result = await controller.listAddonItem(app, request)
    return reply.send(result)
  })
  app.post('/addon_item', async (request, reply) => {
    const result = await controller.createAddonItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/addon_item/:id', async (request, reply) => {
    const result = await controller.getAddonItemById(app, request)
    return reply.send(result)
  })
  app.put('/addon_item/:id', async (request, reply) => {
    const result = await controller.updateAddonItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/addon_item/:id', async (request, reply) => {
    const result = await controller.deleteAddonItem(app, request)
    return reply.send(result)
  })
}

export default AddonItemRoutes
