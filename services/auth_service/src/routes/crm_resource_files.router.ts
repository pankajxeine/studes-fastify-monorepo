import type { FastifyPluginAsync } from 'fastify'
import { CrmResourceFilesService } from '../services/cpanel/crm_resource_files/CrmResourceFilesService'

const CrmResourceFilesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmResourceFilesService()

  app.get('/crm_resource_files', async (request, reply) => {
    const result = await controller.listCrmResourceFiles(app, request)
    return reply.send(result)
  })
  app.post('/crm_resource_files', async (request, reply) => {
    const result = await controller.createCrmResourceFile(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_resource_files/:id', async (request, reply) => {
    const result = await controller.getCrmResourceFilesById(app, request)
    return reply.send(result)
  })
  app.put('/crm_resource_files/:id', async (request, reply) => {
    const result = await controller.updateCrmResourceFile(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_resource_files/:id', async (request, reply) => {
    const result = await controller.deleteCrmResourceFile(app, request)
    return reply.send(result)
  })
}

export default CrmResourceFilesRoutes
