import type { FastifyPluginAsync } from 'fastify'
import { DateFormatsService } from '../services/cpanel/date_formats/DateFormatsService'

const DateFormatsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DateFormatsService()

  app.get('/date_formats', async (request, reply) => {
    const result = await controller.listDateFormats(app, request)
    return reply.send(result)
  })
  app.post('/date_formats', async (request, reply) => {
    const result = await controller.createDateFormat(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/date_formats/:id', async (request, reply) => {
    const result = await controller.getDateFormatsById(app, request)
    return reply.send(result)
  })
  app.put('/date_formats/:id', async (request, reply) => {
    const result = await controller.updateDateFormat(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/date_formats/:id', async (request, reply) => {
    const result = await controller.deleteDateFormat(app, request)
    return reply.send(result)
  })
}

export default DateFormatsRoutes
