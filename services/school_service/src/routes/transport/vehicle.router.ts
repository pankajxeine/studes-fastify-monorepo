import type { FastifyPluginAsync } from 'fastify'
import { VehicleService } from '../../services/transport/vehicle/VehicleService'

const VehicleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new VehicleService()

  app.get('/vehicle', async (request, reply) => {
    const result = await controller.listVehicle(app, request)
    return reply.send(result)
  })
  app.post('/vehicle', async (request, reply) => {
    const result = await controller.createVehicle(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/vehicle/:id', async (request, reply) => {
    const result = await controller.getVehicleById(app, request)
    return reply.send(result)
  })
  app.put('/vehicle/:id', async (request, reply) => {
    const result = await controller.updateVehicle(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/vehicle/:id', async (request, reply) => {
    const result = await controller.deleteVehicle(app, request)
    return reply.send(result)
  })
}

export default VehicleRoutes
