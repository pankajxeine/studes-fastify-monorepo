import type { FastifyPluginAsync } from 'fastify'
import { InvoiceLineService } from '../../services/finance/invoice_line/InvoiceLineService'

const InvoiceLineRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InvoiceLineService()

  app.get('/invoice_line', async (request, reply) => {
    const result = await controller.listInvoiceLine(app, request)
    return reply.send(result)
  })
  app.post('/invoice_line', async (request, reply) => {
    const result = await controller.createInvoiceLine(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/invoice_line/:id', async (request, reply) => {
    const result = await controller.getInvoiceLineById(app, request)
    return reply.send(result)
  })
  app.put('/invoice_line/:id', async (request, reply) => {
    const result = await controller.updateInvoiceLine(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/invoice_line/:id', async (request, reply) => {
    const result = await controller.deleteInvoiceLine(app, request)
    return reply.send(result)
  })
}

export default InvoiceLineRoutes
