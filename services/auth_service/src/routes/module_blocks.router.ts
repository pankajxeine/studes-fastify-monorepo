import type { FastifyPluginAsync } from 'fastify'
import { ModuleBlocksService } from '../services/cpanel/module_blocks/ModuleBlocksService'

const ModuleBlocksRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ModuleBlocksService()

  app.get('/module_blocks', async (request, reply) => {
    const result = await controller.listModuleBlocks(app, request)
    return reply.send(result)
  })
  app.post('/module_blocks', async (request, reply) => {
    const result = await controller.createModuleBlock(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/module_blocks/:id', async (request, reply) => {
    const result = await controller.getModuleBlocksById(app, request)
    return reply.send(result)
  })
  app.put('/module_blocks/:id', async (request, reply) => {
    const result = await controller.updateModuleBlock(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/module_blocks/:id', async (request, reply) => {
    const result = await controller.deleteModuleBlock(app, request)
    return reply.send(result)
  })
}

export default ModuleBlocksRoutes
