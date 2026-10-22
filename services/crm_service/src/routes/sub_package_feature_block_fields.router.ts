import type { FastifyPluginAsync } from 'fastify'
import { SubPackageFeatureBlockFieldsService } from '../services/cpanels/sub_package_feature_block_fields/SubPackageFeatureBlockFieldsService'

const SubPackageFeatureBlockFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubPackageFeatureBlockFieldsService()

  app.get('/sub_package_feature_block_fields', async (request, reply) => {
    const result = await controller.listSubPackageFeatureBlockFields(app, request)
    return reply.send(result)
  })
  app.post('/sub_package_feature_block_fields', async (request, reply) => {
    const result = await controller.createSubPackageFeatureBlockField(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sub_package_feature_block_fields/:id', async (request, reply) => {
    const result = await controller.getSubPackageFeatureBlockFieldsById(app, request)
    return reply.send(result)
  })
  app.put('/sub_package_feature_block_fields/:id', async (request, reply) => {
    const result = await controller.updateSubPackageFeatureBlockField(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sub_package_feature_block_fields/:id', async (request, reply) => {
    const result = await controller.deleteSubPackageFeatureBlockField(app, request)
    return reply.send(result)
  })
}

export default SubPackageFeatureBlockFieldsRoutes
