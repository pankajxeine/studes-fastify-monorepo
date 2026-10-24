import type { FastifyPluginAsync } from 'fastify'
import { AllergenService } from '../../services/canteen/allergen/AllergenService'

const AllergenRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AllergenService()

  app.get('/allergen', async (request, reply) => {
    const result = await controller.listAllergen(app, request)
    return reply.send(result)
  })
  app.post('/allergen', async (request, reply) => {
    const result = await controller.createAllergen(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/allergen/:id', async (request, reply) => {
    const result = await controller.getAllergenById(app, request)
    return reply.send(result)
  })
  app.put('/allergen/:id', async (request, reply) => {
    const result = await controller.updateAllergen(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/allergen/:id', async (request, reply) => {
    const result = await controller.deleteAllergen(app, request)
    return reply.send(result)
  })
}

export default AllergenRoutes
