import type { FastifyPluginAsync } from 'fastify'
import { PackageFeatureBlocksService } from '../services/cpanels/package_feature_blocks/PackageFeatureBlocksService'

const PackageFeatureBlocksRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageFeatureBlocksService()

  app.get('/package_feature_blocks', async (request, reply) => {
    const result = await controller.listPackageFeatureBlocks(app, request)
    return reply.send(result)
  })
  app.post('/package_feature_blocks', async (request, reply) => {
    const result = await controller.createPackageFeatureBlock(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/package_feature_blocks/:id', async (request, reply) => {
    const result = await controller.getPackageFeatureBlocksById(app, request)
    return reply.send(result)
  })
  app.put('/package_feature_blocks/:id', async (request, reply) => {
    const result = await controller.updatePackageFeatureBlock(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/package_feature_blocks/:id', async (request, reply) => {
    const result = await controller.deletePackageFeatureBlock(app, request)
    return reply.send(result)
  })
}

export default PackageFeatureBlocksRoutes
