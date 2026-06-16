import type { FastifyPluginAsync } from 'fastify'
import { CustomerDocumentsService } from '../services/cpanels/customer_documents/CustomerDocumentsService'

const CustomerDocumentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerDocumentsService()
  app.get('/customer_documents', async (request, reply) => {
     return await reply.send(controller.listCustomerDocuments(app, request))
  })
  app.post('/customer_documents', async (request, reply) => {
     return await reply.send(controller.createCustomerDocument(app, request.body as any, request))
  })
  app.get('/customer_documents/:id', async (request, reply) => {
     return await reply.send(controller.getCustomerDocumentsById(app, request))
  })
  app.put('/customer_documents/:id', async (request, reply) => {
     return await reply.send(controller.updateCustomerDocument(app, request.body as any, request))
  })
  app.delete('/customer_documents/:id', async (request, reply) => {
      await controller.deleteCustomerDocument(app, request) 

             reply.code(201) 
          
  })
}

export default CustomerDocumentsRoutes
