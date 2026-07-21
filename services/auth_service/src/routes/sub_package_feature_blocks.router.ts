import type { FastifyPluginAsync } from 'fastify'
import { SubPackageFeatureBlocksService } from '../services/cpanel/sub_package_feature_blocks/SubPackageFeatureBlocksService'

const SubPackageFeatureBlocksRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubPackageFeatureBlocksService()

  app.get('/sub_package_feature_blocks', async (request, reply) => {

    return await reply.send(controller.listSubPackageFeatureBlocks(app, request))
  })
  app.post('/sub_package_feature_blocks', async (request, reply) => {
    return await reply.send(controller.createSubPackageFeatureBlock(app, request.body as any, request))
  })
  app.get('/sub_package_feature_blocks/:id', async (request, reply) => {

    return await reply.send(controller.getSubPackageFeatureBlocksById(app, request))
  })
  app.put('/sub_package_feature_blocks/:id', async (request, reply) => {
    return await reply.send(controller.updateSubPackageFeatureBlock(app, request.body as any, request))
  })
  app.delete('/sub_package_feature_blocks/:id', async (request, reply) => {

    return await reply.send(controller.deleteSubPackageFeatureBlock(app, request))
  })
}

export default SubPackageFeatureBlocksRoutes
