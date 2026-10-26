import type { FastifyPluginAsync } from 'fastify'
import { QuoteLineService } from '../../services/crm/quote_line/QuoteLineService'

const QuoteLineRoutes: FastifyPluginAsync = async (app) => {
  const controller = new QuoteLineService()

  app.get('/quote_line', { config: {"adminPermission":"crm.quote_line.read"} }, async (request, reply) => {
    const result = await controller.listQuoteLine(app, request)
    return reply.send(result)
  })
  app.post('/quote_line', { config: {"adminPermission":"crm.quote_line.create"} }, async (request, reply) => {
    const result = await controller.createQuoteLine(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/quote_line/:quote_line_id', { config: {"adminPermission":"crm.quote_line.read"} }, async (request, reply) => {
    const result = await controller.getQuoteLineById(app, request)
    return reply.send(result)
  })
  app.put('/quote_line/:quote_line_id', { config: {"adminPermission":"crm.quote_line.update"} }, async (request, reply) => {
    const result = await controller.updateQuoteLine(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/quote_line/:quote_line_id', { config: {"adminPermission":"crm.quote_line.delete"} }, async (request, reply) => {
    const result = await controller.deleteQuoteLine(app, request)
    return reply.send(result)
  })
}

export default QuoteLineRoutes
