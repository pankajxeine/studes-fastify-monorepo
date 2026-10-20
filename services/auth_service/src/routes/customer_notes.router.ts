import type { FastifyPluginAsync } from 'fastify'
import { CustomerNotesService } from '../services/cpanels/customer_notes/CustomerNotesService'

const CustomerNotesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerNotesService()

  app.get('/customer_notes', async (request, reply) => {
    const result = await controller.listCustomerNotes(app, request)
    return reply.send(result)
  })
  app.post('/customer_notes', async (request, reply) => {
    const result = await controller.createCustomerNote(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_notes/:id', async (request, reply) => {
    const result = await controller.getCustomerNotesById(app, request)
    return reply.send(result)
  })
  app.put('/customer_notes/:id', async (request, reply) => {
    const result = await controller.updateCustomerNote(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_notes/:id', async (request, reply) => {
    const result = await controller.deleteCustomerNote(app, request)
    return reply.send(result)
  })
}

export default CustomerNotesRoutes
