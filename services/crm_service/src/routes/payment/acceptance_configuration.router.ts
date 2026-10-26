import type { FastifyPluginAsync } from 'fastify'
import { AcceptanceConfigurationService } from '../../services/payment/acceptance_configuration/AcceptanceConfigurationService'

const AcceptanceConfigurationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AcceptanceConfigurationService()

  app.get('/acceptance_configuration', { config: {"adminPermission":"payment.acceptance_configuration.read"} }, async (request, reply) => {
    const result = await controller.listAcceptanceConfiguration(app, request)
    return reply.send(result)
  })
  app.post('/acceptance_configuration', { config: {"adminPermission":"payment.acceptance_configuration.create"} }, async (request, reply) => {
    const result = await controller.createAcceptanceConfiguration(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/acceptance_configuration/:acceptance_configuration_id', { config: {"adminPermission":"payment.acceptance_configuration.read"} }, async (request, reply) => {
    const result = await controller.getAcceptanceConfigurationById(app, request)
    return reply.send(result)
  })
  app.put('/acceptance_configuration/:acceptance_configuration_id', { config: {"adminPermission":"payment.acceptance_configuration.update"} }, async (request, reply) => {
    const result = await controller.updateAcceptanceConfiguration(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/acceptance_configuration/:acceptance_configuration_id', { config: {"adminPermission":"payment.acceptance_configuration.delete"} }, async (request, reply) => {
    const result = await controller.deleteAcceptanceConfiguration(app, request)
    return reply.send(result)
  })
}

export default AcceptanceConfigurationRoutes
