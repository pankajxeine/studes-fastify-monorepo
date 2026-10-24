import type { FastifyPluginAsync } from 'fastify'
import { MeterService } from '../../services/metering/meter/MeterService'

const MeterRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MeterService()

  app.get('/meter', async (request, reply) => {
    const result = await controller.listMeter(app, request)
    return reply.send(result)
  })
  app.post('/meter', async (request, reply) => {
    const result = await controller.createMeter(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/meter/:id', async (request, reply) => {
    const result = await controller.getMeterById(app, request)
    return reply.send(result)
  })
  app.put('/meter/:id', async (request, reply) => {
    const result = await controller.updateMeter(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/meter/:id', async (request, reply) => {
    const result = await controller.deleteMeter(app, request)
    return reply.send(result)
  })
}

export default MeterRoutes
