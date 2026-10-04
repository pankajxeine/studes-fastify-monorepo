import type { FastifyPluginAsync } from 'fastify'
import { TimezonesService } from '../services/cpanel/timezones/TimezonesService'

const TimezonesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TimezonesService()

  app.get('/timezones', async (request, reply) => {
    const result = await controller.listTimezones(app, request)
    return reply.send(result)
  })
  app.post('/timezones', async (request, reply) => {
    const result = await controller.createTimezone(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/timezones/:id', async (request, reply) => {
    const result = await controller.getTimezonesById(app, request)
    return reply.send(result)
  })
  app.put('/timezones/:id', async (request, reply) => {
    const result = await controller.updateTimezone(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/timezones/:id', async (request, reply) => {
    const result = await controller.deleteTimezone(app, request)
    return reply.send(result)
  })
}

export default TimezonesRoutes
