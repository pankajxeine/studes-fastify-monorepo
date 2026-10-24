import type { FastifyPluginAsync } from 'fastify'
import { RoomService } from '../../services/org/room/RoomService'

const RoomRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoomService()

  app.get('/room', async (request, reply) => {
    const result = await controller.listRoom(app, request)
    return reply.send(result)
  })
  app.post('/room', async (request, reply) => {
    const result = await controller.createRoom(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/room/:id', async (request, reply) => {
    const result = await controller.getRoomById(app, request)
    return reply.send(result)
  })
  app.put('/room/:id', async (request, reply) => {
    const result = await controller.updateRoom(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/room/:id', async (request, reply) => {
    const result = await controller.deleteRoom(app, request)
    return reply.send(result)
  })
}

export default RoomRoutes
