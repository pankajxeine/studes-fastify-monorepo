import type { FastifyPluginAsync } from 'fastify'
import { PersonService } from '../../services/people/person/PersonService'

const PersonRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PersonService()

  app.get('/person', async (request, reply) => {
    const result = await controller.listPerson(app, request)
    return reply.send(result)
  })
  app.post('/person', async (request, reply) => {
    const result = await controller.createPerson(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/person/:id', async (request, reply) => {
    const result = await controller.getPersonById(app, request)
    return reply.send(result)
  })
  app.put('/person/:id', async (request, reply) => {
    const result = await controller.updatePerson(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/person/:id', async (request, reply) => {
    const result = await controller.deletePerson(app, request)
    return reply.send(result)
  })
}

export default PersonRoutes
