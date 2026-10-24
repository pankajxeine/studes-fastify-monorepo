import type { FastifyPluginAsync } from 'fastify'
import { PersonAddressService } from '../../services/people/person_address/PersonAddressService'

const PersonAddressRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PersonAddressService()

  app.get('/person_address', async (request, reply) => {
    const result = await controller.listPersonAddress(app, request)
    return reply.send(result)
  })
  app.post('/person_address', async (request, reply) => {
    const result = await controller.createPersonAddress(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/person_address/:id', async (request, reply) => {
    const result = await controller.getPersonAddressById(app, request)
    return reply.send(result)
  })
  app.put('/person_address/:id', async (request, reply) => {
    const result = await controller.updatePersonAddress(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/person_address/:id', async (request, reply) => {
    const result = await controller.deletePersonAddress(app, request)
    return reply.send(result)
  })
}

export default PersonAddressRoutes
