import type { FastifyPluginAsync } from 'fastify'
import { TimetableEntryService } from '../../services/timetable/timetable_entry/TimetableEntryService'

const TimetableEntryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TimetableEntryService()

  app.get('/timetable_entry', async (request, reply) => {
    const result = await controller.listTimetableEntry(app, request)
    return reply.send(result)
  })
  app.post('/timetable_entry', async (request, reply) => {
    const result = await controller.createTimetableEntry(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/timetable_entry/:id', async (request, reply) => {
    const result = await controller.getTimetableEntryById(app, request)
    return reply.send(result)
  })
  app.put('/timetable_entry/:id', async (request, reply) => {
    const result = await controller.updateTimetableEntry(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/timetable_entry/:id', async (request, reply) => {
    const result = await controller.deleteTimetableEntry(app, request)
    return reply.send(result)
  })
}

export default TimetableEntryRoutes
