import type { FastifyPluginAsync } from 'fastify'
import { CrmResourceFoldersService } from '../services/cpanels/crm_resource_folders/CrmResourceFoldersService'

const CrmResourceFoldersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmResourceFoldersService()

  app.get('/crm_resource_folders', async (request, reply) => {
    const result = await controller.listCrmResourceFolders(app, request)
    return reply.send(result)
  })
  app.post('/crm_resource_folders', async (request, reply) => {
    const result = await controller.createCrmResourceFolder(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_resource_folders/:id', async (request, reply) => {
    const result = await controller.getCrmResourceFoldersById(app, request)
    return reply.send(result)
  })
  app.put('/crm_resource_folders/:id', async (request, reply) => {
    const result = await controller.updateCrmResourceFolder(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_resource_folders/:id', async (request, reply) => {
    const result = await controller.deleteCrmResourceFolder(app, request)
    return reply.send(result)
  })
}

export default CrmResourceFoldersRoutes
