import type { FastifyPluginAsync } from 'fastify'
import { ConsentService } from '../../services/audit/consent/ConsentService'

const ConsentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ConsentService()

  app.get('/consent', async (request, reply) => {
    const result = await controller.listConsent(app, request)
    return reply.send(result)
  })
  app.post('/consent', async (request, reply) => {
    const result = await controller.createConsent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/consent/:id', async (request, reply) => {
    const result = await controller.getConsentById(app, request)
    return reply.send(result)
  })
  app.put('/consent/:id', async (request, reply) => {
    const result = await controller.updateConsent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/consent/:id', async (request, reply) => {
    const result = await controller.deleteConsent(app, request)
    return reply.send(result)
  })
}

export default ConsentRoutes
