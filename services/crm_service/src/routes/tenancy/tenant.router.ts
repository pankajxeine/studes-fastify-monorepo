import type { FastifyPluginAsync } from 'fastify'
import { TenantService } from '../../services/tenancy/tenant/TenantService'

const TenantRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantService()

  app.get('/tenant', { config: {"adminPermission":"tenancy.tenant.read"} }, async (request, reply) => {
    const result = await controller.listTenant(app, request)
    return reply.send(result)
  })
  app.post('/tenant', { config: {"adminPermission":"tenancy.tenant.create"} }, async (request, reply) => {
    const result = await controller.createTenant(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/tenant/:tenant_id', { config: {"adminPermission":"tenancy.tenant.read"} }, async (request, reply) => {
    const result = await controller.getTenantById(app, request)
    return reply.send(result)
  })
  app.put('/tenant/:tenant_id', { config: {"adminPermission":"tenancy.tenant.update"} }, async (request, reply) => {
    const result = await controller.updateTenant(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/tenant/:tenant_id', { config: {"adminPermission":"tenancy.tenant.delete"} }, async (request, reply) => {
    const result = await controller.deleteTenant(app, request)
    return reply.send(result)
  })
}

export default TenantRoutes
