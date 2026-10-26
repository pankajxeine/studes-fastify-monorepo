import type { FastifyPluginAsync } from 'fastify'
import { TenantDomainService } from '../../services/tenancy/tenant_domain/TenantDomainService'

const TenantDomainRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantDomainService()

  app.get('/tenant_domain', { config: {"adminPermission":"tenancy.tenant_domain.read"} }, async (request, reply) => {
    const result = await controller.listTenantDomain(app, request)
    return reply.send(result)
  })
  app.post('/tenant_domain', { config: {"adminPermission":"tenancy.tenant_domain.create"} }, async (request, reply) => {
    const result = await controller.createTenantDomain(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/tenant_domain/:tenant_domain_id', { config: {"adminPermission":"tenancy.tenant_domain.read"} }, async (request, reply) => {
    const result = await controller.getTenantDomainById(app, request)
    return reply.send(result)
  })
  app.put('/tenant_domain/:tenant_domain_id', { config: {"adminPermission":"tenancy.tenant_domain.update"} }, async (request, reply) => {
    const result = await controller.updateTenantDomain(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/tenant_domain/:tenant_domain_id', { config: {"adminPermission":"tenancy.tenant_domain.delete"} }, async (request, reply) => {
    const result = await controller.deleteTenantDomain(app, request)
    return reply.send(result)
  })
}

export default TenantDomainRoutes
