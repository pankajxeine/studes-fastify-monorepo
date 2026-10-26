import type { FastifyPluginAsync } from 'fastify'
import { TemplateLocaleService } from '../../services/notify/template_locale/TemplateLocaleService'

const TemplateLocaleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TemplateLocaleService()

  app.get('/template_locale', { config: {"adminPermission":"notify.template_locale.read"} }, async (request, reply) => {
    const result = await controller.listTemplateLocale(app, request)
    return reply.send(result)
  })
  app.post('/template_locale', { config: {"adminPermission":"notify.template_locale.create"} }, async (request, reply) => {
    const result = await controller.createTemplateLocale(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/template_locale/:template_locale_id', { config: {"adminPermission":"notify.template_locale.read"} }, async (request, reply) => {
    const result = await controller.getTemplateLocaleById(app, request)
    return reply.send(result)
  })
  app.put('/template_locale/:template_locale_id', { config: {"adminPermission":"notify.template_locale.update"} }, async (request, reply) => {
    const result = await controller.updateTemplateLocale(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/template_locale/:template_locale_id', { config: {"adminPermission":"notify.template_locale.delete"} }, async (request, reply) => {
    const result = await controller.deleteTemplateLocale(app, request)
    return reply.send(result)
  })
}

export default TemplateLocaleRoutes
