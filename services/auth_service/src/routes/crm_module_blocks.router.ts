import type { FastifyPluginAsync } from 'fastify'
import { CrmModuleBlocksService } from '../services/cpanel/crm_module_blocks/CrmModuleBlocksService'

const CrmModuleBlocksRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmModuleBlocksService()

  app.get('/crm_module_blocks', async (request, reply) => {
    const result = await controller.listCrmModuleBlocks(app, request)
    return reply.send(result)
  })
  app.post('/crm_module_blocks', async (request, reply) => {
    const result = await controller.createCrmModuleBlock(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_module_blocks/:id', async (request, reply) => {
    const result = await controller.getCrmModuleBlocksById(app, request)
    return reply.send(result)
  })
  app.put('/crm_module_blocks/:id', async (request, reply) => {
    const result = await controller.updateCrmModuleBlock(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_module_blocks/:id', async (request, reply) => {
    const result = await controller.deleteCrmModuleBlock(app, request)
    return reply.send(result)
  })
}

export default CrmModuleBlocksRoutes
