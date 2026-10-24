import type { FastifyPluginAsync } from 'fastify'
import { PeriodService } from '../../services/timetable/period/PeriodService'

const PeriodRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PeriodService()

  app.get('/period', async (request, reply) => {
    const result = await controller.listPeriod(app, request)
    return reply.send(result)
  })
  app.post('/period', async (request, reply) => {
    const result = await controller.createPeriod(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/period/:id', async (request, reply) => {
    const result = await controller.getPeriodById(app, request)
    return reply.send(result)
  })
  app.put('/period/:id', async (request, reply) => {
    const result = await controller.updatePeriod(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/period/:id', async (request, reply) => {
    const result = await controller.deletePeriod(app, request)
    return reply.send(result)
  })
}

export default PeriodRoutes
