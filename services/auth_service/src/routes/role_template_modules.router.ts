import type { FastifyPluginAsync } from 'fastify'
import { RoleTemplateModulesService } from '../services/cpanel/role_template_modules/RoleTemplateModulesService'

const RoleTemplateModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoleTemplateModulesService()

  app.get('/role_template_modules', async (request, reply) => {
    const result = await controller.listRoleTemplateModules(app, request)
    return reply.send(result)
  })
  app.post('/role_template_modules', async (request, reply) => {
    const result = await controller.createRoleTemplateModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/role_template_modules/:id', async (request, reply) => {
    const result = await controller.getRoleTemplateModulesById(app, request)
    return reply.send(result)
  })
  app.put('/role_template_modules/:id', async (request, reply) => {
    const result = await controller.updateRoleTemplateModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/role_template_modules/:id', async (request, reply) => {
    const result = await controller.deleteRoleTemplateModule(app, request)
    return reply.send(result)
  })
}

export default RoleTemplateModulesRoutes
