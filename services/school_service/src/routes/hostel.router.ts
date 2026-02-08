import type { FastifyPluginAsync } from 'fastify'
import { HostelService } from '../services/HostelService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const HostelRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HostelService()
  app.get('/hostel/rooms', async (request, reply) => {
    return await controller.listHostelRooms(buildHeaders(request))
  })
  app.post('/hostel/rooms', async (request, reply) => {
    return await controller.createHostelRoom(request.body as any, buildHeaders(request))
  })
  app.post('/hostel/allocations', async (request, reply) => {
    return await controller.allocateHostelRoom(request.body as any, buildHeaders(request))
  })
}

export default HostelRoutes
