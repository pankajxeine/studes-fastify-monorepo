import type { FastifyPluginAsync } from 'fastify'
import { CrmUserModuleBlocksService } from '../services/cpanel/crm_user_module_blocks/CrmUserModuleBlocksService'

const CrmUserModuleBlocksRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmUserModuleBlocksService()

  app.get('/crm_user_module_blocks', async (request, reply) => {
    const result = await controller.listCrmUserModuleBlocks(app, request)
    return reply.send(result)
  })
  app.post('/crm_user_module_blocks', async (request, reply) => {
    const result = await controller.createCrmUserModuleBlock(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crm_user_module_blocks/:id', async (request, reply) => {
    const result = await controller.getCrmUserModuleBlocksById(app, request)
    return reply.send(result)
  })
  app.put('/crm_user_module_blocks/:id', async (request, reply) => {
    const result = await controller.updateCrmUserModuleBlock(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crm_user_module_blocks/:id', async (request, reply) => {
    const result = await controller.deleteCrmUserModuleBlock(app, request)
    return reply.send(result)
  })
}

export default CrmUserModuleBlocksRoutes
