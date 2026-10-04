import type { FastifyPluginAsync } from 'fastify'
import { PackageFeaturesService } from '../services/cpanel/package_features/PackageFeaturesService'

const PackageFeaturesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageFeaturesService()

  app.get('/package_features', async (request, reply) => {
    const result = await controller.listPackageFeatures(app, request)
    return reply.send(result)
  })
  app.post('/package_features', async (request, reply) => {
    const result = await controller.createPackageFeature(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/package_features/:id', async (request, reply) => {
    const result = await controller.getPackageFeaturesById(app, request)
    return reply.send(result)
  })
  app.put('/package_features/:id', async (request, reply) => {
    const result = await controller.updatePackageFeature(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/package_features/:id', async (request, reply) => {
    const result = await controller.deletePackageFeature(app, request)
    return reply.send(result)
  })
}

export default PackageFeaturesRoutes
