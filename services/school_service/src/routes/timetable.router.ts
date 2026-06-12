import type { FastifyPluginAsync } from 'fastify'
import { TimetableService } from '../services/TimetableService'

const TimetableRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TimetableService()
  app.get('/timetable', async (request, reply) => {
    return await controller.listTimetable(app, request)
  })
  app.post('/timetable', async (request, reply) => {
    return await controller.createTimetableEntry(app, request.body as any, request)
  })
}

export default TimetableRoutes
