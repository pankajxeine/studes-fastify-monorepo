import type { FastifyPluginAsync } from 'fastify'
import { EntitlementOverrideService } from '../../services/entitlement/entitlement_override/EntitlementOverrideService'

const EntitlementOverrideRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EntitlementOverrideService()

  app.get('/entitlement_override', async (request, reply) => {
    const result = await controller.listEntitlementOverride(app, request)
    return reply.send(result)
  })
  app.post('/entitlement_override', async (request, reply) => {
    const result = await controller.createEntitlementOverride(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/entitlement_override/:id', async (request, reply) => {
    const result = await controller.getEntitlementOverrideById(app, request)
    return reply.send(result)
  })
  app.put('/entitlement_override/:id', async (request, reply) => {
    const result = await controller.updateEntitlementOverride(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/entitlement_override/:id', async (request, reply) => {
    const result = await controller.deleteEntitlementOverride(app, request)
    return reply.send(result)
  })
}

export default EntitlementOverrideRoutes
