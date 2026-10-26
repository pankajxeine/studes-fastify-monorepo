import type { FastifyPluginAsync } from 'fastify'
import { KycDocumentService } from '../../services/onboarding/kyc_document/KycDocumentService'

const KycDocumentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new KycDocumentService()

  app.get('/kyc_document', { config: {"adminPermission":"onboarding.kyc_document.read"} }, async (request, reply) => {
    const result = await controller.listKycDocument(app, request)
    return reply.send(result)
  })
  app.post('/kyc_document', { config: {"adminPermission":"onboarding.kyc_document.create"} }, async (request, reply) => {
    const result = await controller.createKycDocument(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/kyc_document/:kyc_document_id', { config: {"adminPermission":"onboarding.kyc_document.read"} }, async (request, reply) => {
    const result = await controller.getKycDocumentById(app, request)
    return reply.send(result)
  })
  app.put('/kyc_document/:kyc_document_id', { config: {"adminPermission":"onboarding.kyc_document.update"} }, async (request, reply) => {
    const result = await controller.updateKycDocument(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/kyc_document/:kyc_document_id', { config: {"adminPermission":"onboarding.kyc_document.delete"} }, async (request, reply) => {
    const result = await controller.deleteKycDocument(app, request)
    return reply.send(result)
  })
}

export default KycDocumentRoutes
