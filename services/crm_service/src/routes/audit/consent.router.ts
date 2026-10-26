import type { FastifyPluginAsync } from 'fastify'
import { ConsentService } from '../../services/audit/consent/ConsentService'

const ConsentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ConsentService()

  app.get('/consent', { config: {"adminPermission":"audit.consent.read"} }, async (request, reply) => {
    const result = await controller.listConsent(app, request)
    return reply.send(result)
  })
  app.post('/consent', { config: {"adminPermission":"audit.consent.create"} }, async (request, reply) => {
    const result = await controller.createConsent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/consent/:consent_id', { config: {"adminPermission":"audit.consent.read"} }, async (request, reply) => {
    const result = await controller.getConsentById(app, request)
    return reply.send(result)
  })
  app.put('/consent/:consent_id', { config: {"adminPermission":"audit.consent.update"} }, async (request, reply) => {
    const result = await controller.updateConsent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/consent/:consent_id', { config: {"adminPermission":"audit.consent.delete"} }, async (request, reply) => {
    const result = await controller.deleteConsent(app, request)
    return reply.send(result)
  })
}

export default ConsentRoutes
