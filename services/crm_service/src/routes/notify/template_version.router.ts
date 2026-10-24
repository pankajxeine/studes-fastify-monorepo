import type { FastifyPluginAsync } from 'fastify'
import { TemplateVersionService } from '../../services/notify/template_version/TemplateVersionService'

const TemplateVersionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TemplateVersionService()

  app.get('/template_version', async (request, reply) => {
    const result = await controller.listTemplateVersion(app, request)
    return reply.send(result)
  })
  app.post('/template_version', async (request, reply) => {
    const result = await controller.createTemplateVersion(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/template_version/:id', async (request, reply) => {
    const result = await controller.getTemplateVersionById(app, request)
    return reply.send(result)
  })
  app.put('/template_version/:id', async (request, reply) => {
    const result = await controller.updateTemplateVersion(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/template_version/:id', async (request, reply) => {
    const result = await controller.deleteTemplateVersion(app, request)
    return reply.send(result)
  })
}

export default TemplateVersionRoutes
