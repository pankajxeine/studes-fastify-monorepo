import type { FastifyPluginAsync } from 'fastify'
import { PackageRoleMappingsService } from '../services/package_role_mappings/PackageRoleMappingsService'

const PackageRoleMappingsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageRoleMappingsService()
  app.get('/package_role_mappings', async (request, reply) => {
     return await reply.send(controller.listPackageRoleMappings(app, request))
  })
  app.post('/package_role_mappings', async (request, reply) => {
     return await reply.send(controller.createPackageRoleMapping(app, request.body as any, request))
  })
  app.get('/package_role_mappings/:id', async (request, reply) => {
     return await reply.send(controller.getPackageRoleMappingsById(app, request))
  })
  app.put('/package_role_mappings/:id', async (request, reply) => {
     return await reply.send(controller.updatePackageRoleMapping(app, request.body as any, request))
  })
  app.delete('/package_role_mappings/:id', async (request, reply) => {
      await controller.deletePackageRoleMapping(app, request) 

             reply.code(201) 
          
  })
}

export default PackageRoleMappingsRoutes
