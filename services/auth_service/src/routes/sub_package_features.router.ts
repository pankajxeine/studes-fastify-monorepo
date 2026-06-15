import type { FastifyPluginAsync } from 'fastify'
import { SubPackageFeaturesService } from '../services/sub_package_features/SubPackageFeaturesService'

const SubPackageFeaturesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubPackageFeaturesService()
  app.get('/sub_package_features', async (request, reply) => {
     return await reply.send(controller.listSubPackageFeatures(app, request))
  })
  app.post('/sub_package_features', async (request, reply) => {
     return await reply.send(controller.createSubPackageFeature(app, request.body as any, request))
  })
  app.get('/sub_package_features/:id', async (request, reply) => {
     return await reply.send(controller.getSubPackageFeaturesById(app, request))
  })
  app.put('/sub_package_features/:id', async (request, reply) => {
     return await reply.send(controller.updateSubPackageFeature(app, request.body as any, request))
  })
  app.delete('/sub_package_features/:id', async (request, reply) => {
      await controller.deleteSubPackageFeature(app, request) 

             reply.code(201) 
          
  })
}

export default SubPackageFeaturesRoutes
