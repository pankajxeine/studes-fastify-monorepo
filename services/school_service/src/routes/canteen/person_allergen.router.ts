import type { FastifyPluginAsync } from 'fastify'
import { PersonAllergenService } from '../../services/canteen/person_allergen/PersonAllergenService'

const PersonAllergenRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PersonAllergenService()

  app.get('/person_allergen', async (request, reply) => {
    const result = await controller.listPersonAllergen(app, request)
    return reply.send(result)
  })
  app.post('/person_allergen', async (request, reply) => {
    const result = await controller.createPersonAllergen(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/person_allergen/:id', async (request, reply) => {
    const result = await controller.getPersonAllergenById(app, request)
    return reply.send(result)
  })
  app.put('/person_allergen/:id', async (request, reply) => {
    const result = await controller.updatePersonAllergen(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/person_allergen/:id', async (request, reply) => {
    const result = await controller.deletePersonAllergen(app, request)
    return reply.send(result)
  })
}

export default PersonAllergenRoutes
