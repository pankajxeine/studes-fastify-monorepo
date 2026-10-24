import type { FastifyPluginAsync } from 'fastify'
import { TemplateLocaleService } from '../../services/notify/template_locale/TemplateLocaleService'

const TemplateLocaleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TemplateLocaleService()

  app.get('/template_locale', async (request, reply) => {
    const result = await controller.listTemplateLocale(app, request)
    return reply.send(result)
  })
  app.post('/template_locale', async (request, reply) => {
    const result = await controller.createTemplateLocale(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/template_locale/:id', async (request, reply) => {
    const result = await controller.getTemplateLocaleById(app, request)
    return reply.send(result)
  })
  app.put('/template_locale/:id', async (request, reply) => {
    const result = await controller.updateTemplateLocale(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/template_locale/:id', async (request, reply) => {
    const result = await controller.deleteTemplateLocale(app, request)
    return reply.send(result)
  })
}

export default TemplateLocaleRoutes
