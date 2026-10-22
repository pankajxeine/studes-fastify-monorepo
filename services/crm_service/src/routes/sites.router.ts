import type { FastifyPluginAsync } from 'fastify'
import { SitesService } from '../services/cpanel_router/sites/SitesService'

const SitesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SitesService()

  app.get('/sites', async (request, reply) => {
    const result = await controller.listSites(app, request)
    return reply.send(result)
  })
  app.post('/sites', async (request, reply) => {
    const result = await controller.createSite(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sites/:id', async (request, reply) => {
    const result = await controller.getSitesById(app, request)
    return reply.send(result)
  })
  app.put('/sites/:id', async (request, reply) => {
    const result = await controller.updateSite(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sites/:id', async (request, reply) => {
    const result = await controller.deleteSite(app, request)
    return reply.send(result)
  })
}

export default SitesRoutes
