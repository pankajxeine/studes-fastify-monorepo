import type { FastifyPluginAsync } from 'fastify'
import { VerifoneLogsService } from '../services/cpanel/verifone_logs/VerifoneLogsService'

const VerifoneLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new VerifoneLogsService()

  app.get('/verifone_logs', async (request, reply) => {
    const result = await controller.listVerifoneLogs(app, request)
    return reply.send(result)
  })
  app.post('/verifone_logs', async (request, reply) => {
    const result = await controller.createVerifoneLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/verifone_logs/:id', async (request, reply) => {
    const result = await controller.getVerifoneLogsById(app, request)
    return reply.send(result)
  })
  app.put('/verifone_logs/:id', async (request, reply) => {
    const result = await controller.updateVerifoneLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/verifone_logs/:id', async (request, reply) => {
    const result = await controller.deleteVerifoneLog(app, request)
    return reply.send(result)
  })
}

export default VerifoneLogsRoutes
