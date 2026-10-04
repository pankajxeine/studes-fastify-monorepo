import type { FastifyPluginAsync } from 'fastify'
import { PackageRolesService } from '../services/cpanel/package_roles/PackageRolesService'

const PackageRolesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageRolesService()

  app.get('/package_roles', async (request, reply) => {
    const result = await controller.listPackageRoles(app, request)
    return reply.send(result)
  })
  app.post('/package_roles', async (request, reply) => {
    const result = await controller.createPackageRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/package_roles/:id', async (request, reply) => {
    const result = await controller.getPackageRolesById(app, request)
    return reply.send(result)
  })
  app.put('/package_roles/:id', async (request, reply) => {
    const result = await controller.updatePackageRole(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/package_roles/:id', async (request, reply) => {
    const result = await controller.deletePackageRole(app, request)
    return reply.send(result)
  })
}

export default PackageRolesRoutes
