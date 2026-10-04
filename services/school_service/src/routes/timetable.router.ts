import type { FastifyPluginAsync } from 'fastify'
import { TimetableService } from '../services/timetable/TimetableService'

const TimetableRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TimetableService()

  app.get('/timetable', async (request, reply) => {
    const result = await controller.listTimetable(app, request)
    return reply.send(result)
  })
  app.post('/timetable', async (request, reply) => {
    const result = await controller.createTimetableEntry(app, request.body as any, request)
    return reply.send(result)
  })
}

export default TimetableRoutes
