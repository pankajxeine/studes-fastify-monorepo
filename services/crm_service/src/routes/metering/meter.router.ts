import type { FastifyPluginAsync } from 'fastify'
import { MeterService } from '../../services/metering/meter/MeterService'

const MeterRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MeterService()

  app.get('/meter', { config: {"adminPermission":"metering.meter.read"} }, async (request, reply) => {
    const result = await controller.listMeter(app, request)
    return reply.send(result)
  })
  app.post('/meter', { config: {"adminPermission":"metering.meter.create"} }, async (request, reply) => {
    const result = await controller.createMeter(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/meter/:meter_id', { config: {"adminPermission":"metering.meter.read"} }, async (request, reply) => {
    const result = await controller.getMeterById(app, request)
    return reply.send(result)
  })
  app.put('/meter/:meter_id', { config: {"adminPermission":"metering.meter.update"} }, async (request, reply) => {
    const result = await controller.updateMeter(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/meter/:meter_id', { config: {"adminPermission":"metering.meter.delete"} }, async (request, reply) => {
    const result = await controller.deleteMeter(app, request)
    return reply.send(result)
  })
}

export default MeterRoutes
