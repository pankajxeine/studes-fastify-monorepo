import type { FastifyPluginAsync } from 'fastify'
import { RegionService } from '../../services/platform/region/RegionService'

const RegionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RegionService()

  app.get('/region', { config: {"adminPermission":"platform.region.read"} }, async (request, reply) => {
    const result = await controller.listRegion(app, request)
    return reply.send(result)
  })
  app.post('/region', { config: {"adminPermission":"platform.region.create"} }, async (request, reply) => {
    const result = await controller.createRegion(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/region/:region_id', { config: {"adminPermission":"platform.region.read"} }, async (request, reply) => {
    const result = await controller.getRegionById(app, request)
    return reply.send(result)
  })
  app.put('/region/:region_id', { config: {"adminPermission":"platform.region.update"} }, async (request, reply) => {
    const result = await controller.updateRegion(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/region/:region_id', { config: {"adminPermission":"platform.region.delete"} }, async (request, reply) => {
    const result = await controller.deleteRegion(app, request)
    return reply.send(result)
  })
}

export default RegionRoutes
