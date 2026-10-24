import type { FastifyPluginAsync } from 'fastify'
import { InquirySourceService } from '../../services/admission/inquiry_source/InquirySourceService'

const InquirySourceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InquirySourceService()

  app.get('/inquiry_source', async (request, reply) => {
    const result = await controller.listInquirySource(app, request)
    return reply.send(result)
  })
  app.post('/inquiry_source', async (request, reply) => {
    const result = await controller.createInquirySource(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/inquiry_source/:id', async (request, reply) => {
    const result = await controller.getInquirySourceById(app, request)
    return reply.send(result)
  })
  app.put('/inquiry_source/:id', async (request, reply) => {
    const result = await controller.updateInquirySource(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/inquiry_source/:id', async (request, reply) => {
    const result = await controller.deleteInquirySource(app, request)
    return reply.send(result)
  })
}

export default InquirySourceRoutes
