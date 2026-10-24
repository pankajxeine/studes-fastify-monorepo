import type { FastifyPluginAsync } from 'fastify'
import { EntitlementSnapshotService } from '../../services/entitlement/entitlement_snapshot/EntitlementSnapshotService'

const EntitlementSnapshotRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EntitlementSnapshotService()

  app.get('/entitlement_snapshot', async (request, reply) => {
    const result = await controller.listEntitlementSnapshot(app, request)
    return reply.send(result)
  })
  app.post('/entitlement_snapshot', async (request, reply) => {
    const result = await controller.createEntitlementSnapshot(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/entitlement_snapshot/:id', async (request, reply) => {
    const result = await controller.getEntitlementSnapshotById(app, request)
    return reply.send(result)
  })
  app.put('/entitlement_snapshot/:id', async (request, reply) => {
    const result = await controller.updateEntitlementSnapshot(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/entitlement_snapshot/:id', async (request, reply) => {
    const result = await controller.deleteEntitlementSnapshot(app, request)
    return reply.send(result)
  })
}

export default EntitlementSnapshotRoutes
