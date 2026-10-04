import type { FastifyPluginAsync } from 'fastify'
import { PackageRoleMappingsService } from '../services/cpanel/package_role_mappings/PackageRoleMappingsService'

const PackageRoleMappingsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageRoleMappingsService()

  app.get('/package_role_mappings', async (request, reply) => {
    const result = await controller.listPackageRoleMappings(app, request)
    return reply.send(result)
  })
  app.post('/package_role_mappings', async (request, reply) => {
    const result = await controller.createPackageRoleMapping(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/package_role_mappings/:id', async (request, reply) => {
    const result = await controller.getPackageRoleMappingsById(app, request)
    return reply.send(result)
  })
  app.put('/package_role_mappings/:id', async (request, reply) => {
    const result = await controller.updatePackageRoleMapping(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/package_role_mappings/:id', async (request, reply) => {
    const result = await controller.deletePackageRoleMapping(app, request)
    return reply.send(result)
  })
}

export default PackageRoleMappingsRoutes
