import type { FastifyPluginAsync } from 'fastify'
import { PartnerAgreementService } from '../../services/partner/partner_agreement/PartnerAgreementService'

const PartnerAgreementRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PartnerAgreementService()

  app.get('/partner_agreement', async (request, reply) => {
    const result = await controller.listPartnerAgreement(app, request)
    return reply.send(result)
  })
  app.post('/partner_agreement', async (request, reply) => {
    const result = await controller.createPartnerAgreement(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/partner_agreement/:id', async (request, reply) => {
    const result = await controller.getPartnerAgreementById(app, request)
    return reply.send(result)
  })
  app.put('/partner_agreement/:id', async (request, reply) => {
    const result = await controller.updatePartnerAgreement(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/partner_agreement/:id', async (request, reply) => {
    const result = await controller.deletePartnerAgreement(app, request)
    return reply.send(result)
  })
}

export default PartnerAgreementRoutes
