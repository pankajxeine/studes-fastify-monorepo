import type { FastifyPluginAsync } from 'fastify'
import { CustomModulesService } from '../services/cpanels/custom_modules/CustomModulesService'

const CustomModulesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomModulesService()

  app.get('/custom_modules', async (request, reply) => {
    const result = await controller.listCustomModules(app, request)
    return reply.send(result)
  })
  app.post('/custom_modules', async (request, reply) => {
    const result = await controller.createCustomModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/custom_modules/:id', async (request, reply) => {
    const result = await controller.getCustomModulesById(app, request)
    return reply.send(result)
  })
  app.put('/custom_modules/:id', async (request, reply) => {
    const result = await controller.updateCustomModule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/custom_modules/:id', async (request, reply) => {
    const result = await controller.deleteCustomModule(app, request)
    return reply.send(result)
  })
}

export default CustomModulesRoutes
