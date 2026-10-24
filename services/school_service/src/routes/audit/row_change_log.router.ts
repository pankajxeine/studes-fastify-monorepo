import type { FastifyPluginAsync } from 'fastify'
import { RowChangeLogService } from '../../services/audit/row_change_log/RowChangeLogService'

const RowChangeLogRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RowChangeLogService()

  app.get('/row_change_log', async (request, reply) => {
    const result = await controller.listRowChangeLog(app, request)
    return reply.send(result)
  })
  app.post('/row_change_log', async (request, reply) => {
    const result = await controller.createRowChangeLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/row_change_log/:id', async (request, reply) => {
    const result = await controller.getRowChangeLogById(app, request)
    return reply.send(result)
  })
  app.put('/row_change_log/:id', async (request, reply) => {
    const result = await controller.updateRowChangeLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/row_change_log/:id', async (request, reply) => {
    const result = await controller.deleteRowChangeLog(app, request)
    return reply.send(result)
  })
}

export default RowChangeLogRoutes
