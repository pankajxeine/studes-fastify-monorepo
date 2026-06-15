import type { FastifyPluginAsync } from 'fastify'
import { PackageFeaturesService } from '../services/package_features/PackageFeaturesService'

const PackageFeaturesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageFeaturesService()
  app.get('/package_features', async (request, reply) => {
     return await reply.send(controller.listPackageFeatures(app, request))
  })
  app.post('/package_features', async (request, reply) => {
     return await reply.send(controller.createPackageFeature(app, request.body as any, request))
  })
  app.get('/package_features/:id', async (request, reply) => {
     return await reply.send(controller.getPackageFeaturesById(app, request))
  })
  app.put('/package_features/:id', async (request, reply) => {
     return await reply.send(controller.updatePackageFeature(app, request.body as any, request))
  })
  app.delete('/package_features/:id', async (request, reply) => {
      await controller.deletePackageFeature(app, request) 

             reply.code(201) 
          
  })
}

export default PackageFeaturesRoutes
