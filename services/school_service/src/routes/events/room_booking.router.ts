import type { FastifyPluginAsync } from 'fastify'
import { RoomBookingService } from '../../services/events/room_booking/RoomBookingService'

const RoomBookingRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoomBookingService()

  app.get('/room_booking', async (request, reply) => {
    const result = await controller.listRoomBooking(app, request)
    return reply.send(result)
  })
  app.post('/room_booking', async (request, reply) => {
    const result = await controller.createRoomBooking(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/room_booking/:id', async (request, reply) => {
    const result = await controller.getRoomBookingById(app, request)
    return reply.send(result)
  })
  app.put('/room_booking/:id', async (request, reply) => {
    const result = await controller.updateRoomBooking(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/room_booking/:id', async (request, reply) => {
    const result = await controller.deleteRoomBooking(app, request)
    return reply.send(result)
  })
}

export default RoomBookingRoutes
