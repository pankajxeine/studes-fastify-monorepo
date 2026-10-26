import type { FastifyPluginAsync } from 'fastify'
import { NumberSeriesService } from '../../services/billing/number_series/NumberSeriesService'

const NumberSeriesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NumberSeriesService()

  app.get('/number_series', { config: {"adminPermission":"billing.number_series.read"} }, async (request, reply) => {
    const result = await controller.listNumberSeries(app, request)
    return reply.send(result)
  })
  app.post('/number_series', { config: {"adminPermission":"billing.number_series.create"} }, async (request, reply) => {
    const result = await controller.createNumberSeries(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/number_series/:number_series_id', { config: {"adminPermission":"billing.number_series.read"} }, async (request, reply) => {
    const result = await controller.getNumberSeriesById(app, request)
    return reply.send(result)
  })
  app.put('/number_series/:number_series_id', { config: {"adminPermission":"billing.number_series.update"} }, async (request, reply) => {
    const result = await controller.updateNumberSeries(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/number_series/:number_series_id', { config: {"adminPermission":"billing.number_series.delete"} }, async (request, reply) => {
    const result = await controller.deleteNumberSeries(app, request)
    return reply.send(result)
  })
}

export default NumberSeriesRoutes
