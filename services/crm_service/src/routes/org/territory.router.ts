import type { FastifyPluginAsync } from 'fastify'
import { TerritoryService } from '../../services/org/territory/TerritoryService'

const TerritoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TerritoryService()

  app.get('/territory', { config: {"adminPermission":"org.territory.read"} }, async (request, reply) => {
    const result = await controller.listTerritory(app, request)
    return reply.send(result)
  })
  app.post('/territory', { config: {"adminPermission":"org.territory.create"} }, async (request, reply) => {
    const result = await controller.createTerritory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/territory/:territory_id', { config: {"adminPermission":"org.territory.read"} }, async (request, reply) => {
    const result = await controller.getTerritoryById(app, request)
    return reply.send(result)
  })
  app.put('/territory/:territory_id', { config: {"adminPermission":"org.territory.update"} }, async (request, reply) => {
    const result = await controller.updateTerritory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/territory/:territory_id', { config: {"adminPermission":"org.territory.delete"} }, async (request, reply) => {
    const result = await controller.deleteTerritory(app, request)
    return reply.send(result)
  })
}

export default TerritoryRoutes
