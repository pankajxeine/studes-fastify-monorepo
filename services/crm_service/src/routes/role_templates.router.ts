import type { FastifyPluginAsync } from 'fastify'
import { RoleTemplatesService } from '../services/cpanels/role_templates/RoleTemplatesService'

const RoleTemplatesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoleTemplatesService()

  app.get('/role_templates', async (request, reply) => {
    const result = await controller.listRoleTemplates(app, request)
    return reply.send(result)
  })
  app.post('/role_templates', async (request, reply) => {
    const result = await controller.createRoleTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/role_templates/:id', async (request, reply) => {
    const result = await controller.getRoleTemplatesById(app, request)
    return reply.send(result)
  })
  app.put('/role_templates/:id', async (request, reply) => {
    const result = await controller.updateRoleTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/role_templates/:id', async (request, reply) => {
    const result = await controller.deleteRoleTemplate(app, request)
    return reply.send(result)
  })
}

export default RoleTemplatesRoutes
