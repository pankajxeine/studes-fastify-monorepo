import type { FastifyPluginAsync } from 'fastify'
import { InquiryService } from '../../services/admission/inquiry/InquiryService'

const InquiryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InquiryService()

  app.get('/inquiry', async (request, reply) => {
    const result = await controller.listInquiry(app, request)
    return reply.send(result)
  })
  app.post('/inquiry', async (request, reply) => {
    const result = await controller.createInquiry(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/inquiry/:id', async (request, reply) => {
    const result = await controller.getInquiryById(app, request)
    return reply.send(result)
  })
  app.put('/inquiry/:id', async (request, reply) => {
    const result = await controller.updateInquiry(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/inquiry/:id', async (request, reply) => {
    const result = await controller.deleteInquiry(app, request)
    return reply.send(result)
  })
}

export default InquiryRoutes
