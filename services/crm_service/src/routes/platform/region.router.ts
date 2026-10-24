import type { FastifyPluginAsync } from 'fastify'
import { RegionService } from '../../services/platform/region/RegionService'

const RegionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RegionService()

  app.get('/region', async (request, reply) => {
    const result = await controller.listRegion(app, request)
    return reply.send(result)
  })
  app.post('/region', async (request, reply) => {
    const result = await controller.createRegion(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/region/:id', async (request, reply) => {
    const result = await controller.getRegionById(app, request)
    return reply.send(result)
  })
  app.put('/region/:id', async (request, reply) => {
    const result = await controller.updateRegion(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/region/:id', async (request, reply) => {
    const result = await controller.deleteRegion(app, request)
    return reply.send(result)
  })
}

export default RegionRoutes
