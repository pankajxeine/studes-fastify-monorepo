import type { FastifyPluginAsync } from 'fastify'
import { BellScheduleService } from '../../services/timetable/bell_schedule/BellScheduleService'

const BellScheduleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BellScheduleService()

  app.get('/bell_schedule', async (request, reply) => {
    const result = await controller.listBellSchedule(app, request)
    return reply.send(result)
  })
  app.post('/bell_schedule', async (request, reply) => {
    const result = await controller.createBellSchedule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/bell_schedule/:id', async (request, reply) => {
    const result = await controller.getBellScheduleById(app, request)
    return reply.send(result)
  })
  app.put('/bell_schedule/:id', async (request, reply) => {
    const result = await controller.updateBellSchedule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/bell_schedule/:id', async (request, reply) => {
    const result = await controller.deleteBellSchedule(app, request)
    return reply.send(result)
  })
}

export default BellScheduleRoutes
