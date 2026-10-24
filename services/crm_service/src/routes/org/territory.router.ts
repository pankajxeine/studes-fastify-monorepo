import type { FastifyPluginAsync } from 'fastify'
import { TerritoryService } from '../../services/org/territory/TerritoryService'

const TerritoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TerritoryService()

  app.get('/territory', async (request, reply) => {
    const result = await controller.listTerritory(app, request)
    return reply.send(result)
  })
  app.post('/territory', async (request, reply) => {
    const result = await controller.createTerritory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/territory/:id', async (request, reply) => {
    const result = await controller.getTerritoryById(app, request)
    return reply.send(result)
  })
  app.put('/territory/:id', async (request, reply) => {
    const result = await controller.updateTerritory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/territory/:id', async (request, reply) => {
    const result = await controller.deleteTerritory(app, request)
    return reply.send(result)
  })
}

export default TerritoryRoutes
