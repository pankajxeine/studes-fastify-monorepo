import type { FastifyPluginAsync } from 'fastify'
import { PackageRoleFeaturePermissionsService } from '../services/package_role_feature_permissions/PackageRoleFeaturePermissionsService'

const PackageRoleFeaturePermissionsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageRoleFeaturePermissionsService()
  app.get('/package_role_feature_permissions', async (request, reply) => {
     return await reply.send(controller.listPackageRoleFeaturePermissions(app, request))
  })
  app.post('/package_role_feature_permissions', async (request, reply) => {
     return await reply.send(controller.createPackageRoleFeaturePermission(app, request.body as any, request))
  })
  app.get('/package_role_feature_permissions/:id', async (request, reply) => {
     return await reply.send(controller.getPackageRoleFeaturePermissionsById(app, request))
  })
  app.put('/package_role_feature_permissions/:id', async (request, reply) => {
     return await reply.send(controller.updatePackageRoleFeaturePermission(app, request.body as any, request))
  })
  app.delete('/package_role_feature_permissions/:id', async (request, reply) => {
      await controller.deletePackageRoleFeaturePermission(app, request) 

             reply.code(201) 
          
  })
}

export default PackageRoleFeaturePermissionsRoutes
