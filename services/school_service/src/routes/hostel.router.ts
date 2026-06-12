import type { FastifyPluginAsync } from 'fastify'
import { HostelService } from '../services/HostelService'

const HostelRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HostelService()
  app.get('/hostel/rooms', async (request, reply) => {
    return await controller.listHostelRooms(app, request)
  })
  app.post('/hostel/rooms', async (request, reply) => {
    return await controller.createHostelRoom(app, request.body as any, request)
  })
  app.post('/hostel/allocations', async (request, reply) => {
    return await controller.allocateHostelRoom(app, request.body as any, request)
  })
}

export default HostelRoutes
