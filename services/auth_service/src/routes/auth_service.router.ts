import type { FastifyPluginAsync } from 'fastify'
import { AuthServiceService } from '../services/AuthServiceService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const AuthServiceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AuthServiceService()
  app.get('/health', async (request, reply) => {
    return await controller.authHealth(buildHeaders(request))
  })
  app.get('/health/db', async (request, reply) => {
    return await controller.authHealthDb(buildHeaders(request))
  })
  app.post('/auth/register', async (request, reply) => {
    return await controller.authRegister(request.body as any, buildHeaders(request))
  })
  app.post('/auth/login', async (request, reply) => {
    return await controller.authLogin(request.body as any, buildHeaders(request))
  })
  app.post('/auth/logout', async (request, reply) => {
    await controller.authLogout(buildHeaders(request))
  })
  app.post('/tenants', async (request, reply) => {
    return await controller.createTenant(request.body as any, buildHeaders(request))
  })
}

export default AuthServiceRoutes
