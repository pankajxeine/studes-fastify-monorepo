import type { FastifyPluginAsync } from 'fastify'
import { CustomerNotesService } from '../services/cpanel/customer_notes/CustomerNotesService'

const CustomerNotesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerNotesService()

  app.get('/customer_notes', async (request, reply) => {
    
    return await reply.send(controller.listCustomerNotes(app, request))
  })
  app.post('/customer_notes', async (request, reply) => {
    return await reply.send(controller.createCustomerNote(app, request.body as any, request))
  })
  app.get('/customer_notes/:id', async (request, reply) => {
    
    return await reply.send(controller.getCustomerNotesById(app, request))
  })
  app.put('/customer_notes/:id', async (request, reply) => {
    return await reply.send(controller.updateCustomerNote(app, request.body as any, request))
  })
  app.delete('/customer_notes/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteCustomerNote(app, request))
  })
}

export default CustomerNotesRoutes
