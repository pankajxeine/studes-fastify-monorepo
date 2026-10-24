import type { FastifyPluginAsync } from 'fastify'
import { GenderService } from '../../services/people/gender/GenderService'

const GenderRoutes: FastifyPluginAsync = async (app) => {
  const controller = new GenderService()

  app.get('/gender', async (request, reply) => {
    const result = await controller.listGender(app, request)
    return reply.send(result)
  })
  app.post('/gender', async (request, reply) => {
    const result = await controller.createGender(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/gender/:id', async (request, reply) => {
    const result = await controller.getGenderById(app, request)
    return reply.send(result)
  })
  app.put('/gender/:id', async (request, reply) => {
    const result = await controller.updateGender(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/gender/:id', async (request, reply) => {
    const result = await controller.deleteGender(app, request)
    return reply.send(result)
  })
}

export default GenderRoutes
