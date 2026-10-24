import type { FastifyPluginAsync } from 'fastify'
import { ReportCardRemarkService } from '../../services/exam/report_card_remark/ReportCardRemarkService'

const ReportCardRemarkRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ReportCardRemarkService()

  app.get('/report_card_remark', async (request, reply) => {
    const result = await controller.listReportCardRemark(app, request)
    return reply.send(result)
  })
  app.post('/report_card_remark', async (request, reply) => {
    const result = await controller.createReportCardRemark(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/report_card_remark/:id', async (request, reply) => {
    const result = await controller.getReportCardRemarkById(app, request)
    return reply.send(result)
  })
  app.put('/report_card_remark/:id', async (request, reply) => {
    const result = await controller.updateReportCardRemark(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/report_card_remark/:id', async (request, reply) => {
    const result = await controller.deleteReportCardRemark(app, request)
    return reply.send(result)
  })
}

export default ReportCardRemarkRoutes
