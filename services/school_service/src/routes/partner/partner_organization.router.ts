import type { FastifyPluginAsync } from 'fastify'
import { PartnerOrganizationService } from '../../services/partner/partner_organization/PartnerOrganizationService'

const PartnerOrganizationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PartnerOrganizationService()

  app.get('/partner_organization', async (request, reply) => {
    const result = await controller.listPartnerOrganization(app, request)
    return reply.send(result)
  })
  app.post('/partner_organization', async (request, reply) => {
    const result = await controller.createPartnerOrganization(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/partner_organization/:id', async (request, reply) => {
    const result = await controller.getPartnerOrganizationById(app, request)
    return reply.send(result)
  })
  app.put('/partner_organization/:id', async (request, reply) => {
    const result = await controller.updatePartnerOrganization(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/partner_organization/:id', async (request, reply) => {
    const result = await controller.deletePartnerOrganization(app, request)
    return reply.send(result)
  })
}

export default PartnerOrganizationRoutes
