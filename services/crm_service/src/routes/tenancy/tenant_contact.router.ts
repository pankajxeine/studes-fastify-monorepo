import type { FastifyPluginAsync } from 'fastify'
import { TenantContactService } from '../../services/tenancy/tenant_contact/TenantContactService'

const TenantContactRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantContactService()

  app.get('/tenant_contact', { config: {"adminPermission":"tenancy.tenant_contact.read"} }, async (request, reply) => {
    const result = await controller.listTenantContact(app, request)
    return reply.send(result)
  })
  app.post('/tenant_contact', { config: {"adminPermission":"tenancy.tenant_contact.create"} }, async (request, reply) => {
    const result = await controller.createTenantContact(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/tenant_contact/:tenant_contact_id', { config: {"adminPermission":"tenancy.tenant_contact.read"} }, async (request, reply) => {
    const result = await controller.getTenantContactById(app, request)
    return reply.send(result)
  })
  app.put('/tenant_contact/:tenant_contact_id', { config: {"adminPermission":"tenancy.tenant_contact.update"} }, async (request, reply) => {
    const result = await controller.updateTenantContact(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/tenant_contact/:tenant_contact_id', { config: {"adminPermission":"tenancy.tenant_contact.delete"} }, async (request, reply) => {
    const result = await controller.deleteTenantContact(app, request)
    return reply.send(result)
  })
}

export default TenantContactRoutes
