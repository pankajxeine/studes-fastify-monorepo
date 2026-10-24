import type { FastifyPluginAsync } from 'fastify'
import { NumberSeriesService } from '../../services/billing/number_series/NumberSeriesService'

const NumberSeriesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NumberSeriesService()

  app.get('/number_series', async (request, reply) => {
    const result = await controller.listNumberSeries(app, request)
    return reply.send(result)
  })
  app.post('/number_series', async (request, reply) => {
    const result = await controller.createNumberSeries(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/number_series/:id', async (request, reply) => {
    const result = await controller.getNumberSeriesById(app, request)
    return reply.send(result)
  })
  app.put('/number_series/:id', async (request, reply) => {
    const result = await controller.updateNumberSeries(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/number_series/:id', async (request, reply) => {
    const result = await controller.deleteNumberSeries(app, request)
    return reply.send(result)
  })
}

export default NumberSeriesRoutes
