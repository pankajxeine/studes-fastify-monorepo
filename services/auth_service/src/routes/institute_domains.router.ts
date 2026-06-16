import type { FastifyPluginAsync } from 'fastify'
import { InstituteDomainsService } from '../services/cpanels/institute_domains/InstituteDomainsService'

const InstituteDomainsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InstituteDomainsService()
  app.get('/institute_domains', async (request, reply) => {
     return await reply.send(controller.listInstituteDomains(app, request))
  })
  app.post('/institute_domains', async (request, reply) => {
     return await reply.send(controller.createInstituteDomain(app, request.body as any, request))
  })
  app.get('/institute_domains/:id', async (request, reply) => {
     return await reply.send(controller.getInstituteDomainsById(app, request))
  })
  app.put('/institute_domains/:id', async (request, reply) => {
     return await reply.send(controller.updateInstituteDomain(app, request.body as any, request))
  })
  app.delete('/institute_domains/:id', async (request, reply) => {
      await controller.deleteInstituteDomain(app, request) 

             reply.code(201) 
          
  })
}

export default InstituteDomainsRoutes
