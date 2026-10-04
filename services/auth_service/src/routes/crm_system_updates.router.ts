import type { FastifyPluginAsync } from 'fastify'
import { CrmSystemUpdatesService } from '../services/cpanel/crm_system_updates/CrmSystemUpdatesService'

const CrmSystemUpdatesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmSystemUpdatesService()

  app.get('/crm_system_updates', async (request, reply) => {
    const result = await controller.listCrmSystemUpdates(app, request)
    return reply.send(result)
  })
  app.post('/crm_system_updates', async (request, reply) => {
    const result = await controller.createCrmSystemUpdate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_system_updates/:id', async (request, reply) => {
    const result = await controller.getCrmSystemUpdatesById(app, request)
    return reply.send(result)
  })
  app.put('/crm_system_updates/:id', async (request, reply) => {
    const result = await controller.updateCrmSystemUpdate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_system_updates/:id', async (request, reply) => {
    const result = await controller.deleteCrmSystemUpdate(app, request)
    return reply.send(result)
  })
}

export default CrmSystemUpdatesRoutes
