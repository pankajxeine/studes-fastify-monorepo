import type { FastifyPluginAsync } from 'fastify'
import { PackagesService } from '../services/PackagesService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const PackagesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackagesService()
  app.get('/packages', async (request, reply) => {
    return await controller.listPackages(buildHeaders(request))
  })
  app.post('/packages', async (request, reply) => {
    return await controller.createPackage(request.body as any, buildHeaders(request))
  })
  app.get('/packages/:packageId', async (request, reply) => {
    return await controller.getPackage(buildHeaders(request))
  })
  app.patch('/packages/:packageId', async (request, reply) => {
    return await controller.updatePackage(request.body as any, buildHeaders(request))
  })
  app.delete('/packages/:packageId', async (request, reply) => {
    await controller.deletePackage(buildHeaders(request))
  })
}

export default PackagesRoutes
