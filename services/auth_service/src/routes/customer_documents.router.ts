import type { FastifyPluginAsync } from 'fastify'
import { CustomerDocumentsService } from '../services/cpanel/customer_documents/CustomerDocumentsService'

const CustomerDocumentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerDocumentsService()

  app.get('/customer_documents', async (request, reply) => {
    const result = await controller.listCustomerDocuments(app, request)
    return reply.send(result)
  })
  app.post('/customer_documents', async (request, reply) => {
    const result = await controller.createCustomerDocument(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_documents/:id', async (request, reply) => {
    const result = await controller.getCustomerDocumentsById(app, request)
    return reply.send(result)
  })
  app.put('/customer_documents/:id', async (request, reply) => {
    const result = await controller.updateCustomerDocument(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_documents/:id', async (request, reply) => {
    const result = await controller.deleteCustomerDocument(app, request)
    return reply.send(result)
  })
}

export default CustomerDocumentsRoutes
