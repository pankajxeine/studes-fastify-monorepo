import type { FastifyPluginAsync } from 'fastify'
import { SensitiveColumnService } from '../../services/audit/sensitive_column/SensitiveColumnService'

const SensitiveColumnRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SensitiveColumnService()

  app.get('/sensitive_column', { config: {"adminPermission":"audit.sensitive_column.read"} }, async (request, reply) => {
    const result = await controller.listSensitiveColumn(app, request)
    return reply.send(result)
  })
  app.post('/sensitive_column', { config: {"adminPermission":"audit.sensitive_column.create"} }, async (request, reply) => {
    const result = await controller.createSensitiveColumn(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sensitive_column/:sensitive_column_id', { config: {"adminPermission":"audit.sensitive_column.read"} }, async (request, reply) => {
    const result = await controller.getSensitiveColumnById(app, request)
    return reply.send(result)
  })
  app.put('/sensitive_column/:sensitive_column_id', { config: {"adminPermission":"audit.sensitive_column.update"} }, async (request, reply) => {
    const result = await controller.updateSensitiveColumn(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sensitive_column/:sensitive_column_id', { config: {"adminPermission":"audit.sensitive_column.delete"} }, async (request, reply) => {
    const result = await controller.deleteSensitiveColumn(app, request)
    return reply.send(result)
  })
}

export default SensitiveColumnRoutes
