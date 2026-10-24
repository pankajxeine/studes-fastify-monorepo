import type { FastifyPluginAsync } from 'fastify'
import { VehicleMaintenanceService } from '../../services/transport/vehicle_maintenance/VehicleMaintenanceService'

const VehicleMaintenanceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new VehicleMaintenanceService()

  app.get('/vehicle_maintenance', async (request, reply) => {
    const result = await controller.listVehicleMaintenance(app, request)
    return reply.send(result)
  })
  app.post('/vehicle_maintenance', async (request, reply) => {
    const result = await controller.createVehicleMaintenance(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/vehicle_maintenance/:id', async (request, reply) => {
    const result = await controller.getVehicleMaintenanceById(app, request)
    return reply.send(result)
  })
  app.put('/vehicle_maintenance/:id', async (request, reply) => {
    const result = await controller.updateVehicleMaintenance(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/vehicle_maintenance/:id', async (request, reply) => {
    const result = await controller.deleteVehicleMaintenance(app, request)
    return reply.send(result)
  })
}

export default VehicleMaintenanceRoutes
