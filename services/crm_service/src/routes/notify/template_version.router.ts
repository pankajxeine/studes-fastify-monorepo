import type { FastifyPluginAsync } from 'fastify'
import { TemplateVersionService } from '../../services/notify/template_version/TemplateVersionService'

const TemplateVersionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TemplateVersionService()

  app.get('/template_version', { config: {"adminPermission":"notify.template_version.read"} }, async (request, reply) => {
    const result = await controller.listTemplateVersion(app, request)
    return reply.send(result)
  })
  app.post('/template_version', { config: {"adminPermission":"notify.template_version.create"} }, async (request, reply) => {
    const result = await controller.createTemplateVersion(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/template_version/:template_version_id', { config: {"adminPermission":"notify.template_version.read"} }, async (request, reply) => {
    const result = await controller.getTemplateVersionById(app, request)
    return reply.send(result)
  })
  app.put('/template_version/:template_version_id', { config: {"adminPermission":"notify.template_version.update"} }, async (request, reply) => {
    const result = await controller.updateTemplateVersion(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/template_version/:template_version_id', { config: {"adminPermission":"notify.template_version.delete"} }, async (request, reply) => {
    const result = await controller.deleteTemplateVersion(app, request)
    return reply.send(result)
  })
}

export default TemplateVersionRoutes
