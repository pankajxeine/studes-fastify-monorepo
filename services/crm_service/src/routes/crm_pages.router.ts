import type { FastifyPluginAsync } from 'fastify'
import { CrmPagesService } from '../services/cpanels/crm_pages/CrmPagesService'

const CrmPagesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmPagesService()

  app.get('/crm_pages', async (request, reply) => {
    const result = await controller.listCrmPages(app, request)
    return reply.send(result)
  })
  app.post('/crm_pages', async (request, reply) => {
    const result = await controller.createCrmPage(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_pages/:id', async (request, reply) => {
    const result = await controller.getCrmPagesById(app, request)
    return reply.send(result)
  })
  app.put('/crm_pages/:id', async (request, reply) => {
    const result = await controller.updateCrmPage(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_pages/:id', async (request, reply) => {
    const result = await controller.deleteCrmPage(app, request)
    return reply.send(result)
  })
}

export default CrmPagesRoutes
