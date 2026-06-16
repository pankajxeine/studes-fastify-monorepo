import type { FastifyPluginAsync } from 'fastify'
import { PackageFeatureBlocksService } from '../services/cpanels/package_feature_blocks/PackageFeatureBlocksService'

const PackageFeatureBlocksRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageFeatureBlocksService()
  app.get('/package_feature_blocks', async (request, reply) => {
     return await reply.send(controller.listPackageFeatureBlocks(app, request))
  })
  app.post('/package_feature_blocks', async (request, reply) => {
     return await reply.send(controller.createPackageFeatureBlock(app, request.body as any, request))
  })
  app.get('/package_feature_blocks/:id', async (request, reply) => {
     return await reply.send(controller.getPackageFeatureBlocksById(app, request))
  })
  app.put('/package_feature_blocks/:id', async (request, reply) => {
     return await reply.send(controller.updatePackageFeatureBlock(app, request.body as any, request))
  })
  app.delete('/package_feature_blocks/:id', async (request, reply) => {
      await controller.deletePackageFeatureBlock(app, request) 

             reply.code(201) 
          
  })
}

export default PackageFeatureBlocksRoutes
