import type { FastifyPluginAsync } from 'fastify'
import { HolidayService } from '../../services/academic/holiday/HolidayService'

const HolidayRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HolidayService()

  app.get('/holiday', async (request, reply) => {
    const result = await controller.listHoliday(app, request)
    return reply.send(result)
  })
  app.post('/holiday', async (request, reply) => {
    const result = await controller.createHoliday(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/holiday/:id', async (request, reply) => {
    const result = await controller.getHolidayById(app, request)
    return reply.send(result)
  })
  app.put('/holiday/:id', async (request, reply) => {
    const result = await controller.updateHoliday(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/holiday/:id', async (request, reply) => {
    const result = await controller.deleteHoliday(app, request)
    return reply.send(result)
  })
}

export default HolidayRoutes
