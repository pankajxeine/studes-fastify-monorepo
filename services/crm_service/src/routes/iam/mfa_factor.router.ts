import type { FastifyPluginAsync } from 'fastify'
import { MfaFactorService } from '../../services/iam/mfa_factor/MfaFactorService'

const MfaFactorRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MfaFactorService()

  app.get('/mfa_factor', async (request, reply) => {
    const result = await controller.listMfaFactor(app, request)
    return reply.send(result)
  })
  app.post('/mfa_factor', async (request, reply) => {
    const result = await controller.createMfaFactor(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/mfa_factor/:id', async (request, reply) => {
    const result = await controller.getMfaFactorById(app, request)
    return reply.send(result)
  })
  app.put('/mfa_factor/:id', async (request, reply) => {
    const result = await controller.updateMfaFactor(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/mfa_factor/:id', async (request, reply) => {
    const result = await controller.deleteMfaFactor(app, request)
    return reply.send(result)
  })
}

export default MfaFactorRoutes
