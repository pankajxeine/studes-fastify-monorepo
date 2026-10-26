import type { FastifyPluginAsync } from 'fastify'
import { QuotaAlertService } from '../../services/metering/quota_alert/QuotaAlertService'

const QuotaAlertRoutes: FastifyPluginAsync = async (app) => {
  const controller = new QuotaAlertService()

  app.get('/quota_alert', { config: {"adminPermission":"metering.quota_alert.read"} }, async (request, reply) => {
    const result = await controller.listQuotaAlert(app, request)
    return reply.send(result)
  })
  app.post('/quota_alert', { config: {"adminPermission":"metering.quota_alert.create"} }, async (request, reply) => {
    const result = await controller.createQuotaAlert(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/quota_alert/:quota_alert_id', { config: {"adminPermission":"metering.quota_alert.read"} }, async (request, reply) => {
    const result = await controller.getQuotaAlertById(app, request)
    return reply.send(result)
  })
  app.put('/quota_alert/:quota_alert_id', { config: {"adminPermission":"metering.quota_alert.update"} }, async (request, reply) => {
    const result = await controller.updateQuotaAlert(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/quota_alert/:quota_alert_id', { config: {"adminPermission":"metering.quota_alert.delete"} }, async (request, reply) => {
    const result = await controller.deleteQuotaAlert(app, request)
    return reply.send(result)
  })
}

export default QuotaAlertRoutes
