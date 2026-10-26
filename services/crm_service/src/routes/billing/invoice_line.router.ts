import type { FastifyPluginAsync } from 'fastify'
import { InvoiceLineService } from '../../services/billing/invoice_line/InvoiceLineService'

const InvoiceLineRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InvoiceLineService()

  app.get('/invoice_line', { config: {"adminPermission":"billing.invoice_line.read"} }, async (request, reply) => {
    const result = await controller.listInvoiceLine(app, request)
    return reply.send(result)
  })
  app.post('/invoice_line', { config: {"adminPermission":"billing.invoice_line.create"} }, async (request, reply) => {
    const result = await controller.createInvoiceLine(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/invoice_line/:invoice_line_id', { config: {"adminPermission":"billing.invoice_line.read"} }, async (request, reply) => {
    const result = await controller.getInvoiceLineById(app, request)
    return reply.send(result)
  })
  app.put('/invoice_line/:invoice_line_id', { config: {"adminPermission":"billing.invoice_line.update"} }, async (request, reply) => {
    const result = await controller.updateInvoiceLine(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/invoice_line/:invoice_line_id', { config: {"adminPermission":"billing.invoice_line.delete"} }, async (request, reply) => {
    const result = await controller.deleteInvoiceLine(app, request)
    return reply.send(result)
  })
}

export default InvoiceLineRoutes
