import type { FastifyPluginAsync } from 'fastify'
import { PackageRoleFeaturePermissionsService } from '../services/cpanel/package_role_feature_permissions/PackageRoleFeaturePermissionsService'

const PackageRoleFeaturePermissionsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageRoleFeaturePermissionsService()

  app.get('/package_role_feature_permissions', async (request, reply) => {
    const result = await controller.listPackageRoleFeaturePermissions(app, request)
    return reply.send(result)
  })
  app.post('/package_role_feature_permissions', async (request, reply) => {
    const result = await controller.createPackageRoleFeaturePermission(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/package_role_feature_permissions/:id', async (request, reply) => {
    const result = await controller.getPackageRoleFeaturePermissionsById(app, request)
    return reply.send(result)
  })
  app.put('/package_role_feature_permissions/:id', async (request, reply) => {
    const result = await controller.updatePackageRoleFeaturePermission(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/package_role_feature_permissions/:id', async (request, reply) => {
    const result = await controller.deletePackageRoleFeaturePermission(app, request)
    return reply.send(result)
  })
}

export default PackageRoleFeaturePermissionsRoutes
