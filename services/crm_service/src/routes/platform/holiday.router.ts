import type { FastifyPluginAsync } from 'fastify'
import { HolidayService } from '../../services/platform/holiday/HolidayService'

const HolidayRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HolidayService()

  app.get('/holiday', { config: {"adminPermission":"platform.holiday.read"} }, async (request, reply) => {
    const result = await controller.listHoliday(app, request)
    return reply.send(result)
  })
  app.post('/holiday', { config: {"adminPermission":"platform.holiday.create"} }, async (request, reply) => {
    const result = await controller.createHoliday(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/holiday/:holiday_id', { config: {"adminPermission":"platform.holiday.read"} }, async (request, reply) => {
    const result = await controller.getHolidayById(app, request)
    return reply.send(result)
  })
  app.put('/holiday/:holiday_id', { config: {"adminPermission":"platform.holiday.update"} }, async (request, reply) => {
    const result = await controller.updateHoliday(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/holiday/:holiday_id', { config: {"adminPermission":"platform.holiday.delete"} }, async (request, reply) => {
    const result = await controller.deleteHoliday(app, request)
    return reply.send(result)
  })
}

export default HolidayRoutes
