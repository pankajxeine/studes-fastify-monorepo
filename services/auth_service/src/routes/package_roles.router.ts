import type { FastifyPluginAsync } from 'fastify'
import { PackageRolesService } from '../services/cpanels/package_roles/PackageRolesService'

const PackageRolesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageRolesService()
  app.get('/package_roles', async (request, reply) => {
     return await reply.send(controller.listPackageRoles(app, request))
  })
  app.post('/package_roles', async (request, reply) => {
     return await reply.send(controller.createPackageRole(app, request.body as any, request))
  })
  app.get('/package_roles/:id', async (request, reply) => {
     return await reply.send(controller.getPackageRolesById(app, request))
  })
  app.put('/package_roles/:id', async (request, reply) => {
     return await reply.send(controller.updatePackageRole(app, request.body as any, request))
  })
  app.delete('/package_roles/:id', async (request, reply) => {
      await controller.deletePackageRole(app, request) 

             reply.code(201) 
          
  })
}

export default PackageRolesRoutes
