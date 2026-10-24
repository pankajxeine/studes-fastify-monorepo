import type { FastifyPluginAsync } from 'fastify'
import { AddonVersionService } from '../../services/commerce/addon_version/AddonVersionService'

const AddonVersionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AddonVersionService()

  app.get('/addon_version', async (request, reply) => {
    const result = await controller.listAddonVersion(app, request)
    return reply.send(result)
  })
  app.post('/addon_version', async (request, reply) => {
    const result = await controller.createAddonVersion(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/addon_version/:id', async (request, reply) => {
    const result = await controller.getAddonVersionById(app, request)
    return reply.send(result)
  })
  app.put('/addon_version/:id', async (request, reply) => {
    const result = await controller.updateAddonVersion(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/addon_version/:id', async (request, reply) => {
    const result = await controller.deleteAddonVersion(app, request)
    return reply.send(result)
  })
}

export default AddonVersionRoutes
