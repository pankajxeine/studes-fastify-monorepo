import type { FastifyPluginAsync } from 'fastify'
import { PersonContactService } from '../../services/people/person_contact/PersonContactService'

const PersonContactRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PersonContactService()

  app.get('/person_contact', async (request, reply) => {
    const result = await controller.listPersonContact(app, request)
    return reply.send(result)
  })
  app.post('/person_contact', async (request, reply) => {
    const result = await controller.createPersonContact(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/person_contact/:id', async (request, reply) => {
    const result = await controller.getPersonContactById(app, request)
    return reply.send(result)
  })
  app.put('/person_contact/:id', async (request, reply) => {
    const result = await controller.updatePersonContact(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/person_contact/:id', async (request, reply) => {
    const result = await controller.deletePersonContact(app, request)
    return reply.send(result)
  })
}

export default PersonContactRoutes
