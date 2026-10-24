import type { FastifyPluginAsync } from 'fastify'
import { AssetMaintenanceService } from '../../services/inventory/asset_maintenance/AssetMaintenanceService'

const AssetMaintenanceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AssetMaintenanceService()

  app.get('/asset_maintenance', async (request, reply) => {
    const result = await controller.listAssetMaintenance(app, request)
    return reply.send(result)
  })
  app.post('/asset_maintenance', async (request, reply) => {
    const result = await controller.createAssetMaintenance(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/asset_maintenance/:id', async (request, reply) => {
    const result = await controller.getAssetMaintenanceById(app, request)
    return reply.send(result)
  })
  app.put('/asset_maintenance/:id', async (request, reply) => {
    const result = await controller.updateAssetMaintenance(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/asset_maintenance/:id', async (request, reply) => {
    const result = await controller.deleteAssetMaintenance(app, request)
    return reply.send(result)
  })
}

export default AssetMaintenanceRoutes
