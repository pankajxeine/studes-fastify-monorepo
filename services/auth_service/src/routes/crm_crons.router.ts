import type { FastifyPluginAsync } from 'fastify'
import { CrmCronsService } from '../services/cpanel/crm_crons/CrmCronsService'

const CrmCronsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmCronsService()

  app.get('/crm_crons', async (request, reply) => {
    const result = await controller.listCrmCrons(app, request)
    return reply.send(result)
  })
  app.post('/crm_crons', async (request, reply) => {
    const result = await controller.createCrmCron(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_crons/:id', async (request, reply) => {
    const result = await controller.getCrmCronsById(app, request)
    return reply.send(result)
  })
  app.put('/crm_crons/:id', async (request, reply) => {
    const result = await controller.updateCrmCron(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_crons/:id', async (request, reply) => {
    const result = await controller.deleteCrmCron(app, request)
    return reply.send(result)
  })
}

export default CrmCronsRoutes
