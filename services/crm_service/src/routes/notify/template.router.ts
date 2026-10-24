import type { FastifyPluginAsync } from 'fastify'
import { TemplateService } from '../../services/notify/template/TemplateService'

const TemplateRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TemplateService()

  app.get('/template', async (request, reply) => {
    const result = await controller.listTemplate(app, request)
    return reply.send(result)
  })
  app.post('/template', async (request, reply) => {
    const result = await controller.createTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/template/:id', async (request, reply) => {
    const result = await controller.getTemplateById(app, request)
    return reply.send(result)
  })
  app.put('/template/:id', async (request, reply) => {
    const result = await controller.updateTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/template/:id', async (request, reply) => {
    const result = await controller.deleteTemplate(app, request)
    return reply.send(result)
  })
}

export default TemplateRoutes
