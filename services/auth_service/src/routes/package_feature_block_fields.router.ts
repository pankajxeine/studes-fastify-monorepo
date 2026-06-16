import type { FastifyPluginAsync } from 'fastify'
import { PackageFeatureBlockFieldsService } from '../services/cpanels/package_feature_block_fields/PackageFeatureBlockFieldsService'

const PackageFeatureBlockFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageFeatureBlockFieldsService()
  app.get('/package_feature_block_fields', async (request, reply) => {
     return await reply.send(controller.listPackageFeatureBlockFields(app, request))
  })
  app.post('/package_feature_block_fields', async (request, reply) => {
     return await reply.send(controller.createPackageFeatureBlockField(app, request.body as any, request))
  })
  app.get('/package_feature_block_fields/:id', async (request, reply) => {
     return await reply.send(controller.getPackageFeatureBlockFieldsById(app, request))
  })
  app.put('/package_feature_block_fields/:id', async (request, reply) => {
     return await reply.send(controller.updatePackageFeatureBlockField(app, request.body as any, request))
  })
  app.delete('/package_feature_block_fields/:id', async (request, reply) => {
      await controller.deletePackageFeatureBlockField(app, request) 

             reply.code(201) 
          
  })
}

export default PackageFeatureBlockFieldsRoutes
