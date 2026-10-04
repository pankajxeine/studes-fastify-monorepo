import type { FastifyPluginAsync } from 'fastify'
import { PackageUserTiersService } from '../services/cpanel/package_user_tiers/PackageUserTiersService'

const PackageUserTiersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageUserTiersService()

  app.get('/package_user_tiers', async (request, reply) => {
    const result = await controller.listPackageUserTiers(app, request)
    return reply.send(result)
  })
  app.post('/package_user_tiers', async (request, reply) => {
    const result = await controller.createPackageUserTier(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/package_user_tiers/:id', async (request, reply) => {
    const result = await controller.getPackageUserTiersById(app, request)
    return reply.send(result)
  })
  app.put('/package_user_tiers/:id', async (request, reply) => {
    const result = await controller.updatePackageUserTier(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/package_user_tiers/:id', async (request, reply) => {
    const result = await controller.deletePackageUserTier(app, request)
    return reply.send(result)
  })
}

export default PackageUserTiersRoutes
