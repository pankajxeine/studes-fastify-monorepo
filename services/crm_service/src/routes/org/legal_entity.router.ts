import type { FastifyPluginAsync } from 'fastify'
import { LegalEntityService } from '../../services/org/legal_entity/LegalEntityService'

const LegalEntityRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LegalEntityService()

  app.get('/legal_entity', { config: {"adminPermission":"org.legal_entity.read"} }, async (request, reply) => {
    const result = await controller.listLegalEntity(app, request)
    return reply.send(result)
  })
  app.post('/legal_entity', { config: {"adminPermission":"org.legal_entity.create"} }, async (request, reply) => {
    const result = await controller.createLegalEntity(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/legal_entity/:legal_entity_id', { config: {"adminPermission":"org.legal_entity.read"} }, async (request, reply) => {
    const result = await controller.getLegalEntityById(app, request)
    return reply.send(result)
  })
  app.put('/legal_entity/:legal_entity_id', { config: {"adminPermission":"org.legal_entity.update"} }, async (request, reply) => {
    const result = await controller.updateLegalEntity(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/legal_entity/:legal_entity_id', { config: {"adminPermission":"org.legal_entity.delete"} }, async (request, reply) => {
    const result = await controller.deleteLegalEntity(app, request)
    return reply.send(result)
  })
}

export default LegalEntityRoutes
