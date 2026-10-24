import type { FastifyPluginAsync } from 'fastify'
import { AddonPriceService } from '../../services/commerce/addon_price/AddonPriceService'

const AddonPriceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AddonPriceService()

  app.get('/addon_price', async (request, reply) => {
    const result = await controller.listAddonPrice(app, request)
    return reply.send(result)
  })
  app.post('/addon_price', async (request, reply) => {
    const result = await controller.createAddonPrice(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/addon_price/:id', async (request, reply) => {
    const result = await controller.getAddonPriceById(app, request)
    return reply.send(result)
  })
  app.put('/addon_price/:id', async (request, reply) => {
    const result = await controller.updateAddonPrice(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/addon_price/:id', async (request, reply) => {
    const result = await controller.deleteAddonPrice(app, request)
    return reply.send(result)
  })
}

export default AddonPriceRoutes
