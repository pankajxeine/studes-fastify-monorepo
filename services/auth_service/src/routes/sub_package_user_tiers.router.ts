import type { FastifyPluginAsync } from 'fastify'
import { SubPackageUserTiersService } from '../services/cpanels/sub_package_user_tiers/SubPackageUserTiersService'

const SubPackageUserTiersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubPackageUserTiersService()
  app.get('/sub_package_user_tiers', async (request, reply) => {
     return await reply.send(controller.listSubPackageUserTiers(app, request))
  })
  app.post('/sub_package_user_tiers', async (request, reply) => {
     return await reply.send(controller.createSubPackageUserTier(app, request.body as any, request))
  })
  app.get('/sub_package_user_tiers/:id', async (request, reply) => {
     return await reply.send(controller.getSubPackageUserTiersById(app, request))
  })
  app.put('/sub_package_user_tiers/:id', async (request, reply) => {
     return await reply.send(controller.updateSubPackageUserTier(app, request.body as any, request))
  })
  app.delete('/sub_package_user_tiers/:id', async (request, reply) => {
      await controller.deleteSubPackageUserTier(app, request) 

             reply.code(201) 
          
  })
}

export default SubPackageUserTiersRoutes
