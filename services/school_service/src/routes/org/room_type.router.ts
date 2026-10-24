import type { FastifyPluginAsync } from 'fastify'
import { RoomTypeService } from '../../services/org/room_type/RoomTypeService'

const RoomTypeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoomTypeService()

  app.get('/room_type', async (request, reply) => {
    const result = await controller.listRoomType(app, request)
    return reply.send(result)
  })
  app.post('/room_type', async (request, reply) => {
    const result = await controller.createRoomType(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/room_type/:id', async (request, reply) => {
    const result = await controller.getRoomTypeById(app, request)
    return reply.send(result)
  })
  app.put('/room_type/:id', async (request, reply) => {
    const result = await controller.updateRoomType(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/room_type/:id', async (request, reply) => {
    const result = await controller.deleteRoomType(app, request)
    return reply.send(result)
  })
}

export default RoomTypeRoutes
