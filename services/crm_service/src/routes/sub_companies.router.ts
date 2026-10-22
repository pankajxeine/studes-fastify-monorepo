import type { FastifyPluginAsync } from 'fastify'
import { SubCompaniesService } from '../services/cpanels/sub_companies/SubCompaniesService'

const SubCompaniesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubCompaniesService()

  app.get('/sub_companies', async (request, reply) => {
    const result = await controller.listSubCompanies(app, request)
    return reply.send(result)
  })
  app.post('/sub_companies', async (request, reply) => {
    const result = await controller.createSubCompanie(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sub_companies/:id', async (request, reply) => {
    const result = await controller.getSubCompaniesById(app, request)
    return reply.send(result)
  })
  app.put('/sub_companies/:id', async (request, reply) => {
    const result = await controller.updateSubCompanie(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sub_companies/:id', async (request, reply) => {
    const result = await controller.deleteSubCompanie(app, request)
    return reply.send(result)
  })
}

export default SubCompaniesRoutes
