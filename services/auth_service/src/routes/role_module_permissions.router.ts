import type { FastifyPluginAsync } from 'fastify'
import { RoleModulePermissionsService } from '../services/cpanel/role_module_permissions/RoleModulePermissionsService'

const RoleModulePermissionsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoleModulePermissionsService()

  app.get('/role_module_permissions', async (request, reply) => {
    const result = await controller.listRoleModulePermissions(app, request)
    return reply.send(result)
  })
  app.post('/role_module_permissions', async (request, reply) => {
    const result = await controller.createRoleModulePermission(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/role_module_permissions/:id', async (request, reply) => {
    const result = await controller.getRoleModulePermissionsById(app, request)
    return reply.send(result)
  })
  app.put('/role_module_permissions/:id', async (request, reply) => {
    const result = await controller.updateRoleModulePermission(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/role_module_permissions/:id', async (request, reply) => {
    const result = await controller.deleteRoleModulePermission(app, request)
    return reply.send(result)
  })
}

export default RoleModulePermissionsRoutes
