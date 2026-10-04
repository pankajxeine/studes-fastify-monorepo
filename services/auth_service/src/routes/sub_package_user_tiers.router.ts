import type { FastifyPluginAsync } from 'fastify'
import { SubPackageUserTiersService } from '../services/cpanel/sub_package_user_tiers/SubPackageUserTiersService'

const SubPackageUserTiersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubPackageUserTiersService()

  app.get('/sub_package_user_tiers', async (request, reply) => {
    const result = await controller.listSubPackageUserTiers(app, request)
    return reply.send(result)
  })
  app.post('/sub_package_user_tiers', async (request, reply) => {
    const result = await controller.createSubPackageUserTier(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sub_package_user_tiers/:id', async (request, reply) => {
    const result = await controller.getSubPackageUserTiersById(app, request)
    return reply.send(result)
  })
  app.put('/sub_package_user_tiers/:id', async (request, reply) => {
    const result = await controller.updateSubPackageUserTier(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sub_package_user_tiers/:id', async (request, reply) => {
    const result = await controller.deleteSubPackageUserTier(app, request)
    return reply.send(result)
  })
}

export default SubPackageUserTiersRoutes
