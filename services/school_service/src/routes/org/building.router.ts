import type { FastifyPluginAsync } from 'fastify'
import { BuildingService } from '../../services/org/building/BuildingService'

const BuildingRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BuildingService()

  app.get('/building', async (request, reply) => {
    const result = await controller.listBuilding(app, request)
    return reply.send(result)
  })
  app.post('/building', async (request, reply) => {
    const result = await controller.createBuilding(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/building/:id', async (request, reply) => {
    const result = await controller.getBuildingById(app, request)
    return reply.send(result)
  })
  app.put('/building/:id', async (request, reply) => {
    const result = await controller.updateBuilding(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/building/:id', async (request, reply) => {
    const result = await controller.deleteBuilding(app, request)
    return reply.send(result)
  })
}

export default BuildingRoutes
