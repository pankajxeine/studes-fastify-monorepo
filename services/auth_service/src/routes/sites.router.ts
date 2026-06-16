import type { FastifyPluginAsync } from 'fastify'
import { SitesService } from '../services/cpanels_router/sites/SitesService'

const SitesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SitesService()
  app.get('/sites', async (request, reply) => {
     return await reply.send(controller.listSites(app, request))
  })
  app.post('/sites', async (request, reply) => {
     return await reply.send(controller.createSite(app, request.body as any, request))
  })
  app.get('/sites/:id', async (request, reply) => {
     return await reply.send(controller.getSitesById(app, request))
  })
  app.put('/sites/:id', async (request, reply) => {
     return await reply.send(controller.updateSite(app, request.body as any, request))
  })
  app.delete('/sites/:id', async (request, reply) => {
      await controller.deleteSite(app, request) 

             reply.code(201) 
          
  })
}

export default SitesRoutes
