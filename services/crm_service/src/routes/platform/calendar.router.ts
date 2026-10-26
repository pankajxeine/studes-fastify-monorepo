import type { FastifyPluginAsync } from 'fastify'
import { CalendarService } from '../../services/platform/calendar/CalendarService'

const CalendarRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CalendarService()

  app.get('/calendar', { config: {"adminPermission":"platform.calendar.read"} }, async (request, reply) => {
    const result = await controller.listCalendar(app, request)
    return reply.send(result)
  })
  app.post('/calendar', { config: {"adminPermission":"platform.calendar.create"} }, async (request, reply) => {
    const result = await controller.createCalendar(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/calendar/:calendar_id', { config: {"adminPermission":"platform.calendar.read"} }, async (request, reply) => {
    const result = await controller.getCalendarById(app, request)
    return reply.send(result)
  })
  app.put('/calendar/:calendar_id', { config: {"adminPermission":"platform.calendar.update"} }, async (request, reply) => {
    const result = await controller.updateCalendar(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/calendar/:calendar_id', { config: {"adminPermission":"platform.calendar.delete"} }, async (request, reply) => {
    const result = await controller.deleteCalendar(app, request)
    return reply.send(result)
  })
}

export default CalendarRoutes
