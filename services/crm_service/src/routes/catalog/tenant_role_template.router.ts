import type { FastifyPluginAsync } from 'fastify'
import { TenantRoleTemplateService } from '../../services/catalog/tenant_role_template/TenantRoleTemplateService'

const TenantRoleTemplateRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantRoleTemplateService()

  app.get('/tenant_role_template', { config: {"adminPermission":"catalog.tenant_role_template.read"} }, async (request, reply) => {
    const result = await controller.listTenantRoleTemplate(app, request)
    return reply.send(result)
  })
  app.post('/tenant_role_template', { config: {"adminPermission":"catalog.tenant_role_template.create"} }, async (request, reply) => {
    const result = await controller.createTenantRoleTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/tenant_role_template/:tenant_role_template_id', { config: {"adminPermission":"catalog.tenant_role_template.read"} }, async (request, reply) => {
    const result = await controller.getTenantRoleTemplateById(app, request)
    return reply.send(result)
  })
  app.put('/tenant_role_template/:tenant_role_template_id', { config: {"adminPermission":"catalog.tenant_role_template.update"} }, async (request, reply) => {
    const result = await controller.updateTenantRoleTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/tenant_role_template/:tenant_role_template_id', { config: {"adminPermission":"catalog.tenant_role_template.delete"} }, async (request, reply) => {
    const result = await controller.deleteTenantRoleTemplate(app, request)
    return reply.send(result)
  })
}

export default TenantRoleTemplateRoutes
