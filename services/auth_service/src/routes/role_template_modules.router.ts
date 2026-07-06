import type { FastifyPluginAsync } from 'fastify'
import { RoleTemplateModulesService } from '../services/cpanel/role_template_modules/RoleTemplateModulesService'

const RoleTemplateModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoleTemplateModulesService()

  app.get('/role_template_modules', async (request, reply) => {
    
    return await reply.send(controller.listRoleTemplateModules(app, request))
  })
  app.post('/role_template_modules', async (request, reply) => {
    return await reply.send(controller.createRoleTemplateModule(app, request.body as any, request))
  })
  app.get('/role_template_modules/:id', async (request, reply) => {
    
    return await reply.send(controller.getRoleTemplateModulesById(app, request))
  })
  app.put('/role_template_modules/:id', async (request, reply) => {
    return await reply.send(controller.updateRoleTemplateModule(app, request.body as any, request))
  })
  app.delete('/role_template_modules/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteRoleTemplateModule(app, request))
  })
}

export default RoleTemplateModulesRoutes
