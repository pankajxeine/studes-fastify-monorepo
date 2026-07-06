import type { FastifyPluginAsync } from 'fastify'
import { SubPackageFeatureBlockFieldsService } from '../services/cpanel/sub_package_feature_block_fields/SubPackageFeatureBlockFieldsService'

const SubPackageFeatureBlockFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubPackageFeatureBlockFieldsService()

  app.get('/sub_package_feature_block_fields', async (request, reply) => {
    
    return await reply.send(controller.listSubPackageFeatureBlockFields(app, request))
  })
  app.post('/sub_package_feature_block_fields', async (request, reply) => {
    return await reply.send(controller.createSubPackageFeatureBlockField(app, request.body as any, request))
  })
  app.get('/sub_package_feature_block_fields/:id', async (request, reply) => {
    
    return await reply.send(controller.getSubPackageFeatureBlockFieldsById(app, request))
  })
  app.put('/sub_package_feature_block_fields/:id', async (request, reply) => {
    return await reply.send(controller.updateSubPackageFeatureBlockField(app, request.body as any, request))
  })
  app.delete('/sub_package_feature_block_fields/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteSubPackageFeatureBlockField(app, request))
  })
}

export default SubPackageFeatureBlockFieldsRoutes
