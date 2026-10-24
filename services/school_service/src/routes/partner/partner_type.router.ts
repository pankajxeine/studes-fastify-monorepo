import type { FastifyPluginAsync } from 'fastify'
import { PartnerTypeService } from '../../services/partner/partner_type/PartnerTypeService'

const PartnerTypeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PartnerTypeService()

  app.get('/partner_type', async (request, reply) => {
    const result = await controller.listPartnerType(app, request)
    return reply.send(result)
  })
  app.post('/partner_type', async (request, reply) => {
    const result = await controller.createPartnerType(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/partner_type/:id', async (request, reply) => {
    const result = await controller.getPartnerTypeById(app, request)
    return reply.send(result)
  })
  app.put('/partner_type/:id', async (request, reply) => {
    const result = await controller.updatePartnerType(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/partner_type/:id', async (request, reply) => {
    const result = await controller.deletePartnerType(app, request)
    return reply.send(result)
  })
}

export default PartnerTypeRoutes
