import type { FastifyPluginAsync } from 'fastify'
import { ApiGatewayService } from '../services/ApiGatewayService'

const ApiGatewayRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApiGatewayService()
  app.get('/health', async (request, reply) => {
    return await controller.gatewayHealth(app, request)
  })
  app.get('/health/services', async (request, reply) => {
    return await controller.gatewayHealthServices(app, request)
  })
  app.get('/health/db', async (request, reply) => {
    return await controller.gatewayHealthDb(app, request)
  })
  app.get('/metrics', async (request, reply) => {
    return await controller.gatewayMetrics(app, request)
  })
  app.post('/auth/register', async (request, reply) => {
    return await controller.gatewayAuthRegister(app, request.body as any, request)
  })
  app.post('/auth/login', async (request, reply) => {
    return await controller.gatewayAuthLogin(app, request.body as any, request)
  })
  app.post('/auth/logout', async (request, reply) => {
    await controller.gatewayAuthLogout(app, request)
  })
  app.post('/tenants', async (request, reply) => {
    return await controller.gatewayCreateTenant(app, request.body as any, request)
  })
  app.get('/billing/invoices', async (request, reply) => {
    return await controller.gatewayListInvoices(app, request)
  })
  app.post('/billing/invoices', async (request, reply) => {
    return await controller.gatewayCreateInvoice(app, request.body as any, request)
  })
  app.get('/notifications', async (request, reply) => {
    return await controller.gatewayListNotifications(app, request)
  })
  app.post('/notifications', async (request, reply) => {
    return await controller.gatewayCreateNotification(app, request.body as any, request)
  })
}

export default ApiGatewayRoutes
