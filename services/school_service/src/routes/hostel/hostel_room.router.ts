import type { FastifyPluginAsync } from 'fastify'
import { HostelRoomService } from '../../services/hostel/hostel_room/HostelRoomService'

const HostelRoomRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HostelRoomService()

  app.get('/hostel_room', async (request, reply) => {
    const result = await controller.listHostelRoom(app, request)
    return reply.send(result)
  })
  app.post('/hostel_room', async (request, reply) => {
    const result = await controller.createHostelRoom(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/hostel_room/:id', async (request, reply) => {
    const result = await controller.getHostelRoomById(app, request)
    return reply.send(result)
  })
  app.put('/hostel_room/:id', async (request, reply) => {
    const result = await controller.updateHostelRoom(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/hostel_room/:id', async (request, reply) => {
    const result = await controller.deleteHostelRoom(app, request)
    return reply.send(result)
  })
}

export default HostelRoomRoutes
