import type { FastifyPluginAsync } from 'fastify'
import { ReportsService } from '../services/ReportsService'

const ReportsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ReportsService()
  app.post('/reports/run', async (request, reply) => {
    return await controller.runReport(app, request.body as any, request)
  })
}

export default ReportsRoutes
