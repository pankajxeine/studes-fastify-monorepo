import type { FastifyPluginAsync } from 'fastify'
import { AssetsLogsService } from '../services/cpanel/assets_logs/AssetsLogsService'

const AssetsLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AssetsLogsService()

  app.get('/assets_logs', async (request, reply) => {
    const result = await controller.listAssetsLogs(app, request)
    return reply.send(result)
  })
  app.post('/assets_logs', async (request, reply) => {
    const result = await controller.createAssetsLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/assets_logs/:id', async (request, reply) => {
    const result = await controller.getAssetsLogsById(app, request)
    return reply.send(result)
  })
  app.put('/assets_logs/:id', async (request, reply) => {
    const result = await controller.updateAssetsLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/assets_logs/:id', async (request, reply) => {
    const result = await controller.deleteAssetsLog(app, request)
    return reply.send(result)
  })
}

export default AssetsLogsRoutes
