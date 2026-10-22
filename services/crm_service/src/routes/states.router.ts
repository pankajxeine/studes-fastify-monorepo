import type { FastifyPluginAsync } from 'fastify'
import { StatesService } from '../services/cpanels/states/StatesService'

const StatesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StatesService()

  app.get('/states', async (request, reply) => {
    const result = await controller.listStates(app, request)
    return reply.send(result)
  })
  app.post('/states', async (request, reply) => {
    const result = await controller.createState(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/states/:id', async (request, reply) => {
    const result = await controller.getStatesById(app, request)
    return reply.send(result)
  })
  app.put('/states/:id', async (request, reply) => {
    const result = await controller.updateState(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/states/:id', async (request, reply) => {
    const result = await controller.deleteState(app, request)
    return reply.send(result)
  })
}

export default StatesRoutes
