import type { FastifyPluginAsync } from 'fastify'
import { OrganizationService } from '../../services/org/organization/OrganizationService'

const OrganizationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new OrganizationService()

  app.get('/organization', async (request, reply) => {
    const result = await controller.listOrganization(app, request)
    return reply.send(result)
  })
  app.post('/organization', async (request, reply) => {
    const result = await controller.createOrganization(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/organization/:id', async (request, reply) => {
    const result = await controller.getOrganizationById(app, request)
    return reply.send(result)
  })
  app.put('/organization/:id', async (request, reply) => {
    const result = await controller.updateOrganization(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/organization/:id', async (request, reply) => {
    const result = await controller.deleteOrganization(app, request)
    return reply.send(result)
  })
}

export default OrganizationRoutes
