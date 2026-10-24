import type { FastifyPluginAsync } from 'fastify'
import { PlacementDriveService } from '../../services/partner/placement_drive/PlacementDriveService'

const PlacementDriveRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PlacementDriveService()

  app.get('/placement_drive', async (request, reply) => {
    const result = await controller.listPlacementDrive(app, request)
    return reply.send(result)
  })
  app.post('/placement_drive', async (request, reply) => {
    const result = await controller.createPlacementDrive(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/placement_drive/:id', async (request, reply) => {
    const result = await controller.getPlacementDriveById(app, request)
    return reply.send(result)
  })
  app.put('/placement_drive/:id', async (request, reply) => {
    const result = await controller.updatePlacementDrive(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/placement_drive/:id', async (request, reply) => {
    const result = await controller.deletePlacementDrive(app, request)
    return reply.send(result)
  })
}

export default PlacementDriveRoutes
