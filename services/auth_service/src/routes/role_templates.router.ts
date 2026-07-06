import type { FastifyPluginAsync } from 'fastify'
import { RoleTemplatesService } from '../services/cpanel/role_templates/RoleTemplatesService'

const RoleTemplatesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoleTemplatesService()

  app.get('/role_templates', async (request, reply) => {
    
    return await reply.send(controller.listRoleTemplates(app, request))
  })
  app.post('/role_templates', async (request, reply) => {
    return await reply.send(controller.createRoleTemplate(app, request.body as any, request))
  })
  app.get('/role_templates/:id', async (request, reply) => {
    
    return await reply.send(controller.getRoleTemplatesById(app, request))
  })
  app.put('/role_templates/:id', async (request, reply) => {
    return await reply.send(controller.updateRoleTemplate(app, request.body as any, request))
  })
  app.delete('/role_templates/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteRoleTemplate(app, request))
  })
}

export default RoleTemplatesRoutes
