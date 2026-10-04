import type { FastifyPluginAsync } from 'fastify'
import { PaxStoreLinksService } from '../services/cpanel/pax_store_links/PaxStoreLinksService'

const PaxStoreLinksRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PaxStoreLinksService()

  app.get('/pax_store_links', async (request, reply) => {
    const result = await controller.listPaxStoreLinks(app, request)
    return reply.send(result)
  })
  app.post('/pax_store_links', async (request, reply) => {
    const result = await controller.createPaxStoreLink(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/pax_store_links/:id', async (request, reply) => {
    const result = await controller.getPaxStoreLinksById(app, request)
    return reply.send(result)
  })
  app.put('/pax_store_links/:id', async (request, reply) => {
    const result = await controller.updatePaxStoreLink(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/pax_store_links/:id', async (request, reply) => {
    const result = await controller.deletePaxStoreLink(app, request)
    return reply.send(result)
  })
}

export default PaxStoreLinksRoutes
