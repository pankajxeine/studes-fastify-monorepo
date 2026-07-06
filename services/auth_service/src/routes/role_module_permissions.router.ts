import type { FastifyPluginAsync } from 'fastify'
import { RoleModulePermissionsService } from '../services/cpanel/role_module_permissions/RoleModulePermissionsService'

const RoleModulePermissionsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoleModulePermissionsService()

  app.get('/role_module_permissions', async (request, reply) => {
    
    return await reply.send(controller.listRoleModulePermissions(app, request))
  })
  app.post('/role_module_permissions', async (request, reply) => {
    return await reply.send(controller.createRoleModulePermission(app, request.body as any, request))
  })
  app.get('/role_module_permissions/:id', async (request, reply) => {
    
    return await reply.send(controller.getRoleModulePermissionsById(app, request))
  })
  app.put('/role_module_permissions/:id', async (request, reply) => {
    return await reply.send(controller.updateRoleModulePermission(app, request.body as any, request))
  })
  app.delete('/role_module_permissions/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteRoleModulePermission(app, request))
  })
}

export default RoleModulePermissionsRoutes
