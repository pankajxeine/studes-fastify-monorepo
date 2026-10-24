import type { FastifyPluginAsync } from 'fastify'
import { ReportCardService } from '../../services/exam/report_card/ReportCardService'

const ReportCardRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ReportCardService()

  app.get('/report_card', async (request, reply) => {
    const result = await controller.listReportCard(app, request)
    return reply.send(result)
  })
  app.post('/report_card', async (request, reply) => {
    const result = await controller.createReportCard(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/report_card/:id', async (request, reply) => {
    const result = await controller.getReportCardById(app, request)
    return reply.send(result)
  })
  app.put('/report_card/:id', async (request, reply) => {
    const result = await controller.updateReportCard(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/report_card/:id', async (request, reply) => {
    const result = await controller.deleteReportCard(app, request)
    return reply.send(result)
  })
}

export default ReportCardRoutes
