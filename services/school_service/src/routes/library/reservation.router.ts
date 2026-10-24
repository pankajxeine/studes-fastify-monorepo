import type { FastifyPluginAsync } from 'fastify'
import { ReservationService } from '../../services/library/reservation/ReservationService'

const ReservationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ReservationService()

  app.get('/reservation', async (request, reply) => {
    const result = await controller.listReservation(app, request)
    return reply.send(result)
  })
  app.post('/reservation', async (request, reply) => {
    const result = await controller.createReservation(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/reservation/:id', async (request, reply) => {
    const result = await controller.getReservationById(app, request)
    return reply.send(result)
  })
  app.put('/reservation/:id', async (request, reply) => {
    const result = await controller.updateReservation(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/reservation/:id', async (request, reply) => {
    const result = await controller.deleteReservation(app, request)
    return reply.send(result)
  })
}

export default ReservationRoutes
