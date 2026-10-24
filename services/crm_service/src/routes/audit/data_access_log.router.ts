import type { FastifyPluginAsync } from 'fastify'
import { DataAccessLogService } from '../../services/audit/data_access_log/DataAccessLogService'

const DataAccessLogRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DataAccessLogService()

  app.get('/data_access_log', async (request, reply) => {
    const result = await controller.listDataAccessLog(app, request)
    return reply.send(result)
  })
  app.post('/data_access_log', async (request, reply) => {
    const result = await controller.createDataAccessLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/data_access_log/:id', async (request, reply) => {
    const result = await controller.getDataAccessLogById(app, request)
    return reply.send(result)
  })
  app.put('/data_access_log/:id', async (request, reply) => {
    const result = await controller.updateDataAccessLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/data_access_log/:id', async (request, reply) => {
    const result = await controller.deleteDataAccessLog(app, request)
    return reply.send(result)
  })
}

export default DataAccessLogRoutes
