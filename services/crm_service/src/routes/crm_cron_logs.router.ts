import type { FastifyPluginAsync } from 'fastify'
import { CrmCronLogsService } from '../services/cpanels/crm_cron_logs/CrmCronLogsService'

const CrmCronLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmCronLogsService()

  app.get('/crm_cron_logs', async (request, reply) => {
    const result = await controller.listCrmCronLogs(app, request)
    return reply.send(result)
  })
  app.post('/crm_cron_logs', async (request, reply) => {
    const result = await controller.createCrmCronLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_cron_logs/:id', async (request, reply) => {
    const result = await controller.getCrmCronLogsById(app, request)
    return reply.send(result)
  })
  app.put('/crm_cron_logs/:id', async (request, reply) => {
    const result = await controller.updateCrmCronLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_cron_logs/:id', async (request, reply) => {
    const result = await controller.deleteCrmCronLog(app, request)
    return reply.send(result)
  })
}

export default CrmCronLogsRoutes
