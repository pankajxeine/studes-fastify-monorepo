import type { FastifyPluginAsync } from 'fastify'
import { TemplateService } from '../../services/notify/template/TemplateService'

const TemplateRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TemplateService()

  app.get('/template', { config: {"adminPermission":"notify.template.read"} }, async (request, reply) => {
    const result = await controller.listTemplate(app, request)
    return reply.send(result)
  })
  app.post('/template', { config: {"adminPermission":"notify.template.create"} }, async (request, reply) => {
    const result = await controller.createTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/template/:template_id', { config: {"adminPermission":"notify.template.read"} }, async (request, reply) => {
    const result = await controller.getTemplateById(app, request)
    return reply.send(result)
  })
  app.put('/template/:template_id', { config: {"adminPermission":"notify.template.update"} }, async (request, reply) => {
    const result = await controller.updateTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/template/:template_id', { config: {"adminPermission":"notify.template.delete"} }, async (request, reply) => {
    const result = await controller.deleteTemplate(app, request)
    return reply.send(result)
  })
}

export default TemplateRoutes
