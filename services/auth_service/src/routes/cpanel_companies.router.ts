import type { FastifyPluginAsync } from 'fastify'
import { CpanelCompaniesService } from '../services/cpanel/cpanel_companies/CpanelCompaniesService'

const CpanelCompaniesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelCompaniesService()

  app.get('/cpanel_companies', async (request, reply) => {
    
    return await reply.send(controller.listCpanelCompanies(app, request))
  })
  app.post('/cpanel_companies', async (request, reply) => {
    return await reply.send(controller.createCpanelCompanie(app, request.body as any, request))
  })
  app.get('/cpanel_companies/:id', async (request, reply) => {
    
    return await reply.send(controller.getCpanelCompaniesById(app, request))
  })
  app.put('/cpanel_companies/:id', async (request, reply) => {
    return await reply.send(controller.updateCpanelCompanie(app, request.body as any, request))
  })
  app.delete('/cpanel_companies/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteCpanelCompanie(app, request))
  })
}

export default CpanelCompaniesRoutes
