import type { FastifyPluginAsync } from 'fastify'
import { CpanelCompaniesService } from '../services/cpanels/cpanel_companies/CpanelCompaniesService'

const CpanelCompaniesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelCompaniesService()

  app.get('/cpanel_companies', async (request, reply) => {
    const result = await controller.listCpanelCompanies(app, request)
    return reply.send(result)
  })
  app.post('/cpanel_companies', async (request, reply) => {
    const result = await controller.createCpanelCompanie(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/cpanel_companies/:id', async (request, reply) => {
    const result = await controller.getCpanelCompaniesById(app, request)
    return reply.send(result)
  })
  app.put('/cpanel_companies/:id', async (request, reply) => {
    const result = await controller.updateCpanelCompanie(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/cpanel_companies/:id', async (request, reply) => {
    const result = await controller.deleteCpanelCompanie(app, request)
    return reply.send(result)
  })
}

export default CpanelCompaniesRoutes
