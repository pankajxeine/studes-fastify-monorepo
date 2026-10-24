import type { FastifyPluginAsync } from 'fastify'
import { QuoteService } from '../../services/crm/quote/QuoteService'

const QuoteRoutes: FastifyPluginAsync = async (app) => {
  const controller = new QuoteService()

  app.get('/quote', async (request, reply) => {
    const result = await controller.listQuote(app, request)
    return reply.send(result)
  })
  app.post('/quote', async (request, reply) => {
    const result = await controller.createQuote(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/quote/:id', async (request, reply) => {
    const result = await controller.getQuoteById(app, request)
    return reply.send(result)
  })
  app.put('/quote/:id', async (request, reply) => {
    const result = await controller.updateQuote(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/quote/:id', async (request, reply) => {
    const result = await controller.deleteQuote(app, request)
    return reply.send(result)
  })
}

export default QuoteRoutes
