import type { FastifyPluginAsync } from 'fastify'
import { InstituteDomainsService } from '../services/cpanels/institute_domains/InstituteDomainsService'

const InstituteDomainsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InstituteDomainsService()

  app.get('/institute_domains', async (request, reply) => {
    const result = await controller.listInstituteDomains(app, request)
    return reply.send(result)
  })
  app.post('/institute_domains', async (request, reply) => {
    const result = await controller.createInstituteDomain(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/institute_domains/:id', async (request, reply) => {
    const result = await controller.getInstituteDomainsById(app, request)
    return reply.send(result)
  })
  app.put('/institute_domains/:id', async (request, reply) => {
    const result = await controller.updateInstituteDomain(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/institute_domains/:id', async (request, reply) => {
    const result = await controller.deleteInstituteDomain(app, request)
    return reply.send(result)
  })
}

export default InstituteDomainsRoutes
