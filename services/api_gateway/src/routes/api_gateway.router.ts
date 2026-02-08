import type { FastifyPluginAsync } from 'fastify'
import { ApiGatewayService } from '../services/ApiGatewayService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const ApiGatewayRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApiGatewayService()
  app.get('/health', async (request, reply) => {
    return await controller.gatewayHealth(buildHeaders(request))
  })
  app.get('/health/services', async (request, reply) => {
    return await controller.gatewayHealthServices(buildHeaders(request))
  })
  app.get('/health/db', async (request, reply) => {
    return await controller.gatewayHealthDb(buildHeaders(request))
  })
  app.post('/auth/register', async (request, reply) => {
    return await controller.gatewayAuthRegister(request.body as any, buildHeaders(request))
  })
  app.post('/auth/login', async (request, reply) => {
    return await controller.gatewayAuthLogin(request.body as any, buildHeaders(request))
  })
  app.post('/auth/logout', async (request, reply) => {
    await controller.gatewayAuthLogout(buildHeaders(request))
  })
  app.post('/tenants', async (request, reply) => {
    return await controller.gatewayCreateTenant(request.body as any, buildHeaders(request))
  })
  app.get('/billing/invoices', async (request, reply) => {
    return await controller.gatewayListInvoices(buildHeaders(request))
  })
  app.post('/billing/invoices', async (request, reply) => {
    return await controller.gatewayCreateInvoice(request.body as any, buildHeaders(request))
  })
  app.get('/notifications', async (request, reply) => {
    return await controller.gatewayListNotifications(buildHeaders(request))
  })
  app.post('/notifications', async (request, reply) => {
    return await controller.gatewayCreateNotification(request.body as any, buildHeaders(request))
  })
}

export default ApiGatewayRoutes
