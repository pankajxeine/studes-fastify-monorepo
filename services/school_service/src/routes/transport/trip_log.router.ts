import type { FastifyPluginAsync } from 'fastify'
import { TripLogService } from '../../services/transport/trip_log/TripLogService'

const TripLogRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TripLogService()

  app.get('/trip_log', async (request, reply) => {
    const result = await controller.listTripLog(app, request)
    return reply.send(result)
  })
  app.post('/trip_log', async (request, reply) => {
    const result = await controller.createTripLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/trip_log/:id', async (request, reply) => {
    const result = await controller.getTripLogById(app, request)
    return reply.send(result)
  })
  app.put('/trip_log/:id', async (request, reply) => {
    const result = await controller.updateTripLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/trip_log/:id', async (request, reply) => {
    const result = await controller.deleteTripLog(app, request)
    return reply.send(result)
  })
}

export default TripLogRoutes
