import type { FastifyPluginAsync } from 'fastify'
import { EntitlementGrantService } from '../../services/entitlement/entitlement_grant/EntitlementGrantService'

const EntitlementGrantRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EntitlementGrantService()

  app.get('/entitlement_grant', { config: {"adminPermission":"entitlement.entitlement_grant.read"} }, async (request, reply) => {
    const result = await controller.listEntitlementGrant(app, request)
    return reply.send(result)
  })
  app.post('/entitlement_grant', { config: {"adminPermission":"entitlement.entitlement_grant.create"} }, async (request, reply) => {
    const result = await controller.createEntitlementGrant(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/entitlement_grant/:entitlement_grant_id', { config: {"adminPermission":"entitlement.entitlement_grant.read"} }, async (request, reply) => {
    const result = await controller.getEntitlementGrantById(app, request)
    return reply.send(result)
  })
  app.put('/entitlement_grant/:entitlement_grant_id', { config: {"adminPermission":"entitlement.entitlement_grant.update"} }, async (request, reply) => {
    const result = await controller.updateEntitlementGrant(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/entitlement_grant/:entitlement_grant_id', { config: {"adminPermission":"entitlement.entitlement_grant.delete"} }, async (request, reply) => {
    const result = await controller.deleteEntitlementGrant(app, request)
    return reply.send(result)
  })
}

export default EntitlementGrantRoutes
