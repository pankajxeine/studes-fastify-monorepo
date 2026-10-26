import type { FastifyPluginAsync } from 'fastify'
import { ContactService } from '../../services/crm/contact/ContactService'

const ContactRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ContactService()

  app.get('/contact', { config: {"adminPermission":"crm.contact.read"} }, async (request, reply) => {
    const result = await controller.listContact(app, request)
    return reply.send(result)
  })
  app.post('/contact', { config: {"adminPermission":"crm.contact.create"} }, async (request, reply) => {
    const result = await controller.createContact(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/contact/:contact_id', { config: {"adminPermission":"crm.contact.read"} }, async (request, reply) => {
    const result = await controller.getContactById(app, request)
    return reply.send(result)
  })
  app.put('/contact/:contact_id', { config: {"adminPermission":"crm.contact.update"} }, async (request, reply) => {
    const result = await controller.updateContact(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/contact/:contact_id', { config: {"adminPermission":"crm.contact.delete"} }, async (request, reply) => {
    const result = await controller.deleteContact(app, request)
    return reply.send(result)
  })
}

export default ContactRoutes
