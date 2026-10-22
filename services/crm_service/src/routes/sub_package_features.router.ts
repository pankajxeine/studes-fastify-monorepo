import type { FastifyPluginAsync } from 'fastify'
import { SubPackageFeaturesService } from '../services/cpanels/sub_package_features/SubPackageFeaturesService'

const SubPackageFeaturesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubPackageFeaturesService()

  app.get('/sub_package_features', async (request, reply) => {
    const result = await controller.listSubPackageFeatures(app, request)
    return reply.send(result)
  })
  app.post('/sub_package_features', async (request, reply) => {
    const result = await controller.createSubPackageFeature(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sub_package_features/:id', async (request, reply) => {
    const result = await controller.getSubPackageFeaturesById(app, request)
    return reply.send(result)
  })
  app.put('/sub_package_features/:id', async (request, reply) => {
    const result = await controller.updateSubPackageFeature(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sub_package_features/:id', async (request, reply) => {
    const result = await controller.deleteSubPackageFeature(app, request)
    return reply.send(result)
  })
}

export default SubPackageFeaturesRoutes
