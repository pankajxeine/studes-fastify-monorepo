import type { FastifyPluginAsync } from 'fastify'
import { TenantApplicationService } from '../../services/tenancy/tenant_application/TenantApplicationService'

const TenantApplicationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantApplicationService()

  app.get('/tenant_application', { config: {"adminPermission":"tenancy.tenant_application.read"} }, async (request, reply) => {
    const result = await controller.listTenantApplication(app, request)
    return reply.send(result)
  })
  app.post('/tenant_application', { config: {"adminPermission":"tenancy.tenant_application.create"} }, async (request, reply) => {
    const result = await controller.createTenantApplication(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/tenant_application/:tenant_application_id', { config: {"adminPermission":"tenancy.tenant_application.read"} }, async (request, reply) => {
    const result = await controller.getTenantApplicationById(app, request)
    return reply.send(result)
  })
  app.put('/tenant_application/:tenant_application_id', { config: {"adminPermission":"tenancy.tenant_application.update"} }, async (request, reply) => {
    const result = await controller.updateTenantApplication(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/tenant_application/:tenant_application_id', { config: {"adminPermission":"tenancy.tenant_application.delete"} }, async (request, reply) => {
    const result = await controller.deleteTenantApplication(app, request)
    return reply.send(result)
  })
}

export default TenantApplicationRoutes
