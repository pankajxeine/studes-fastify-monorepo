import type { FastifyPluginAsync } from 'fastify'
import { HostelService } from '../services/hostel/HostelService'

const HostelRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HostelService()

  app.get('/hostel/rooms', async (request, reply) => {
    const result = await controller.listHostelRooms(app, request)
    return reply.send(result)
  })
  app.post('/hostel/rooms', async (request, reply) => {
    const result = await controller.createHostelRoom(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/hostel/allocations', async (request, reply) => {
    const result = await controller.allocateHostelRoom(app, request.body as any, request)
    return reply.send(result)
  })
}

export default HostelRoutes
