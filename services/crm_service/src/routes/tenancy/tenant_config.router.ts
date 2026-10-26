import type { FastifyPluginAsync } from 'fastify'
import { TenantConfigService } from '../../services/tenancy/tenant_config/TenantConfigService'

const TenantConfigRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantConfigService()

  app.get('/tenant_config', { config: {"adminPermission":"tenancy.tenant_config.read"} }, async (request, reply) => {
    const result = await controller.listTenantConfig(app, request)
    return reply.send(result)
  })
  app.post('/tenant_config', { config: {"adminPermission":"tenancy.tenant_config.create"} }, async (request, reply) => {
    const result = await controller.createTenantConfig(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/tenant_config/:tenant_config_id', { config: {"adminPermission":"tenancy.tenant_config.read"} }, async (request, reply) => {
    const result = await controller.getTenantConfigById(app, request)
    return reply.send(result)
  })
  app.put('/tenant_config/:tenant_config_id', { config: {"adminPermission":"tenancy.tenant_config.update"} }, async (request, reply) => {
    const result = await controller.updateTenantConfig(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/tenant_config/:tenant_config_id', { config: {"adminPermission":"tenancy.tenant_config.delete"} }, async (request, reply) => {
    const result = await controller.deleteTenantConfig(app, request)
    return reply.send(result)
  })
}

export default TenantConfigRoutes
