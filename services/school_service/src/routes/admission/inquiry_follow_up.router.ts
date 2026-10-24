import type { FastifyPluginAsync } from 'fastify'
import { InquiryFollowUpService } from '../../services/admission/inquiry_follow_up/InquiryFollowUpService'

const InquiryFollowUpRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InquiryFollowUpService()

  app.get('/inquiry_follow_up', async (request, reply) => {
    const result = await controller.listInquiryFollowUp(app, request)
    return reply.send(result)
  })
  app.post('/inquiry_follow_up', async (request, reply) => {
    const result = await controller.createInquiryFollowUp(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/inquiry_follow_up/:id', async (request, reply) => {
    const result = await controller.getInquiryFollowUpById(app, request)
    return reply.send(result)
  })
  app.put('/inquiry_follow_up/:id', async (request, reply) => {
    const result = await controller.updateInquiryFollowUp(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/inquiry_follow_up/:id', async (request, reply) => {
    const result = await controller.deleteInquiryFollowUp(app, request)
    return reply.send(result)
  })
}

export default InquiryFollowUpRoutes
