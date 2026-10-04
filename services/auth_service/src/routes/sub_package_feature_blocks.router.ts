import type { FastifyPluginAsync } from 'fastify'
import { SubPackageFeatureBlocksService } from '../services/cpanel/sub_package_feature_blocks/SubPackageFeatureBlocksService'

const SubPackageFeatureBlocksRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubPackageFeatureBlocksService()

  app.get('/sub_package_feature_blocks', async (request, reply) => {
    const result = await controller.listSubPackageFeatureBlocks(app, request)
    return reply.send(result)
  })
  app.post('/sub_package_feature_blocks', async (request, reply) => {
    const result = await controller.createSubPackageFeatureBlock(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sub_package_feature_blocks/:id', async (request, reply) => {
    const result = await controller.getSubPackageFeatureBlocksById(app, request)
    return reply.send(result)
  })
  app.put('/sub_package_feature_blocks/:id', async (request, reply) => {
    const result = await controller.updateSubPackageFeatureBlock(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sub_package_feature_blocks/:id', async (request, reply) => {
    const result = await controller.deleteSubPackageFeatureBlock(app, request)
    return reply.send(result)
  })
}

export default SubPackageFeatureBlocksRoutes
