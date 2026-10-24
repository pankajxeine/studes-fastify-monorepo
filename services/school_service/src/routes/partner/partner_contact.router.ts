import type { FastifyPluginAsync } from 'fastify'
import { PartnerContactService } from '../../services/partner/partner_contact/PartnerContactService'

const PartnerContactRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PartnerContactService()

  app.get('/partner_contact', async (request, reply) => {
    const result = await controller.listPartnerContact(app, request)
    return reply.send(result)
  })
  app.post('/partner_contact', async (request, reply) => {
    const result = await controller.createPartnerContact(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/partner_contact/:id', async (request, reply) => {
    const result = await controller.getPartnerContactById(app, request)
    return reply.send(result)
  })
  app.put('/partner_contact/:id', async (request, reply) => {
    const result = await controller.updatePartnerContact(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/partner_contact/:id', async (request, reply) => {
    const result = await controller.deletePartnerContact(app, request)
    return reply.send(result)
  })
}

export default PartnerContactRoutes
