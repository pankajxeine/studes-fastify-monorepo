import type { FastifyPluginAsync } from 'fastify'
import { PackageFeatureBlockFieldsService } from '../services/cpanel/package_feature_block_fields/PackageFeatureBlockFieldsService'

const PackageFeatureBlockFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageFeatureBlockFieldsService()

  app.get('/package_feature_block_fields', async (request, reply) => {
    const result = await controller.listPackageFeatureBlockFields(app, request)
    return reply.send(result)
  })
  app.post('/package_feature_block_fields', async (request, reply) => {
    const result = await controller.createPackageFeatureBlockField(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/package_feature_block_fields/:id', async (request, reply) => {
    const result = await controller.getPackageFeatureBlockFieldsById(app, request)
    return reply.send(result)
  })
  app.put('/package_feature_block_fields/:id', async (request, reply) => {
    const result = await controller.updatePackageFeatureBlockField(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/package_feature_block_fields/:id', async (request, reply) => {
    const result = await controller.deletePackageFeatureBlockField(app, request)
    return reply.send(result)
  })
}

export default PackageFeatureBlockFieldsRoutes
