import type { FastifyPluginAsync } from 'fastify'
import { InvoiceService } from '../../services/billing/invoice/InvoiceService'

const InvoiceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InvoiceService()

  app.get('/invoice', { config: {"adminPermission":"billing.invoice.read"} }, async (request, reply) => {
    const result = await controller.listInvoice(app, request)
    return reply.send(result)
  })
  app.post('/invoice', { config: {"adminPermission":"billing.invoice.create"} }, async (request, reply) => {
    const result = await controller.createInvoice(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/invoice/:invoice_id', { config: {"adminPermission":"billing.invoice.read"} }, async (request, reply) => {
    const result = await controller.getInvoiceById(app, request)
    return reply.send(result)
  })
  app.put('/invoice/:invoice_id', { config: {"adminPermission":"billing.invoice.update"} }, async (request, reply) => {
    const result = await controller.updateInvoice(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/invoice/:invoice_id', { config: {"adminPermission":"billing.invoice.delete"} }, async (request, reply) => {
    const result = await controller.deleteInvoice(app, request)
    return reply.send(result)
  })
}

export default InvoiceRoutes
