import type { FastifyPluginAsync } from 'fastify'
import { AssetService } from '../../services/inventory/asset/AssetService'

const AssetRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AssetService()

  app.get('/asset', async (request, reply) => {
    const result = await controller.listAsset(app, request)
    return reply.send(result)
  })
  app.post('/asset', async (request, reply) => {
    const result = await controller.createAsset(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/asset/:id', async (request, reply) => {
    const result = await controller.getAssetById(app, request)
    return reply.send(result)
  })
  app.put('/asset/:id', async (request, reply) => {
    const result = await controller.updateAsset(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/asset/:id', async (request, reply) => {
    const result = await controller.deleteAsset(app, request)
    return reply.send(result)
  })
}

export default AssetRoutes
