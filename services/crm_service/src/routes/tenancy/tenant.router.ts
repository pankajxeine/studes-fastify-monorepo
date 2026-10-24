import type { FastifyPluginAsync } from 'fastify'
import { TenantService } from '../../services/tenancy/tenant/TenantService'

const TenantRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantService()

  app.get('/tenant', async (request, reply) => {
    const result = await controller.listTenant(app, request)
    return reply.send(result)
  })
  app.post('/tenant', async (request, reply) => {
    const result = await controller.createTenant(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/tenant/:id', async (request, reply) => {
    const result = await controller.getTenantById(app, request)
    return reply.send(result)
  })
  app.put('/tenant/:id', async (request, reply) => {
    const result = await controller.updateTenant(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/tenant/:id', async (request, reply) => {
    const result = await controller.deleteTenant(app, request)
    return reply.send(result)
  })
}

export default TenantRoutes
