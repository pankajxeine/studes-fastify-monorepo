import type { FastifyPluginAsync } from 'fastify'
import { FxRateService } from '../../services/platform/fx_rate/FxRateService'

const FxRateRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FxRateService()

  app.get('/fx_rate', { config: {"adminPermission":"platform.fx_rate.read"} }, async (request, reply) => {
    const result = await controller.listFxRate(app, request)
    return reply.send(result)
  })
  app.post('/fx_rate', { config: {"adminPermission":"platform.fx_rate.create"} }, async (request, reply) => {
    const result = await controller.createFxRate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/fx_rate/:fx_rate_id', { config: {"adminPermission":"platform.fx_rate.read"} }, async (request, reply) => {
    const result = await controller.getFxRateById(app, request)
    return reply.send(result)
  })
  app.put('/fx_rate/:fx_rate_id', { config: {"adminPermission":"platform.fx_rate.update"} }, async (request, reply) => {
    const result = await controller.updateFxRate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/fx_rate/:fx_rate_id', { config: {"adminPermission":"platform.fx_rate.delete"} }, async (request, reply) => {
    const result = await controller.deleteFxRate(app, request)
    return reply.send(result)
  })
}

export default FxRateRoutes
