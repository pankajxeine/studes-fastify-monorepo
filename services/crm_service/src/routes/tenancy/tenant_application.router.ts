import type { FastifyPluginAsync } from 'fastify'
import { TenantApplicationService } from '../../services/tenancy/tenant_application/TenantApplicationService'

const TenantApplicationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantApplicationService()

  app.get('/tenant_application', async (request, reply) => {
    const result = await controller.listTenantApplication(app, request)
    return reply.send(result)
  })
  app.post('/tenant_application', async (request, reply) => {
    const result = await controller.createTenantApplication(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/tenant_application/:id', async (request, reply) => {
    const result = await controller.getTenantApplicationById(app, request)
    return reply.send(result)
  })
  app.put('/tenant_application/:id', async (request, reply) => {
    const result = await controller.updateTenantApplication(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/tenant_application/:id', async (request, reply) => {
    const result = await controller.deleteTenantApplication(app, request)
    return reply.send(result)
  })
}

export default TenantApplicationRoutes
