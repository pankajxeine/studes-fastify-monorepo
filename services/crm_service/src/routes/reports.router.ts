import type { FastifyPluginAsync } from 'fastify'
import { ReportsService } from '../services/reports/ReportsService'

const ReportsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ReportsService()

  app.post('/reports/run', async (request, reply) => {
    const result = await controller.runReport(app, request.body as any, request)
    return reply.send(result)
  })
}

export default ReportsRoutes
