import type { FastifyPluginAsync } from 'fastify'
import { QuoteService } from '../../services/crm/quote/QuoteService'

const QuoteRoutes: FastifyPluginAsync = async (app) => {
  const controller = new QuoteService()

  app.get('/quote', { config: {"adminPermission":"crm.quote.read"} }, async (request, reply) => {
    const result = await controller.listQuote(app, request)
    return reply.send(result)
  })
  app.post('/quote', { config: {"adminPermission":"crm.quote.create"} }, async (request, reply) => {
    const result = await controller.createQuote(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/quote/:quote_id', { config: {"adminPermission":"crm.quote.read"} }, async (request, reply) => {
    const result = await controller.getQuoteById(app, request)
    return reply.send(result)
  })
  app.put('/quote/:quote_id', { config: {"adminPermission":"crm.quote.update"} }, async (request, reply) => {
    const result = await controller.updateQuote(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/quote/:quote_id', { config: {"adminPermission":"crm.quote.delete"} }, async (request, reply) => {
    const result = await controller.deleteQuote(app, request)
    return reply.send(result)
  })
}

export default QuoteRoutes
