import type { FastifyPluginAsync } from 'fastify'
import { AuthService } from '../services/AuthService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const AuthRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AuthService()
  app.post('/auth/register', async (request, reply) => {
    return await controller.authRegister(request.body as any, buildHeaders(request))
  })
  app.post('/auth/login', async (request, reply) => {
    return await controller.authLogin(request.body as any, buildHeaders(request))
  })
  app.post('/auth/logout', async (request, reply) => {
    await controller.authLogout(buildHeaders(request))
  })
  app.post('/auth/refresh', async (request, reply) => {
    return await controller.authRefresh(buildHeaders(request))
  })
}

export default AuthRoutes
