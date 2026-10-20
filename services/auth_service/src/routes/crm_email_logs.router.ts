import type { FastifyPluginAsync } from 'fastify'
import { CrmEmailLogsService } from '../services/cpanels/crm_email_logs/CrmEmailLogsService'

const CrmEmailLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmEmailLogsService()

  app.get('/crm_email_logs', async (request, reply) => {
    const result = await controller.listCrmEmailLogs(app, request)
    return reply.send(result)
  })
  app.post('/crm_email_logs', async (request, reply) => {
    const result = await controller.createCrmEmailLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_email_logs/:id', async (request, reply) => {
    const result = await controller.getCrmEmailLogsById(app, request)
    return reply.send(result)
  })
  app.put('/crm_email_logs/:id', async (request, reply) => {
    const result = await controller.updateCrmEmailLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_email_logs/:id', async (request, reply) => {
    const result = await controller.deleteCrmEmailLog(app, request)
    return reply.send(result)
  })
}

export default CrmEmailLogsRoutes
