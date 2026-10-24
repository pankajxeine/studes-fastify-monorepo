import type { FastifyPluginAsync } from 'fastify'
import { ConfigDefinitionService } from '../../services/platform/config_definition/ConfigDefinitionService'

const ConfigDefinitionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ConfigDefinitionService()

  app.get('/config_definition', async (request, reply) => {
    const result = await controller.listConfigDefinition(app, request)
    return reply.send(result)
  })
  app.post('/config_definition', async (request, reply) => {
    const result = await controller.createConfigDefinition(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/config_definition/:id', async (request, reply) => {
    const result = await controller.getConfigDefinitionById(app, request)
    return reply.send(result)
  })
  app.put('/config_definition/:id', async (request, reply) => {
    const result = await controller.updateConfigDefinition(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/config_definition/:id', async (request, reply) => {
    const result = await controller.deleteConfigDefinition(app, request)
    return reply.send(result)
  })
}

export default ConfigDefinitionRoutes
