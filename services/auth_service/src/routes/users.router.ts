import type { FastifyPluginAsync } from 'fastify'
import { UsersService } from '../services/cpanels/users/UsersService'

const UsersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UsersService()

  app.get('/users', async (request, reply) => {
    const result = await controller.listUsers(app, request)
    return reply.send(result)
  })
  app.post('/users', async (request, reply) => {
    const result = await controller.createUser(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/users/:id', async (request, reply) => {
    const result = await controller.getUsersById(app, request)
    return reply.send(result)
  })
  app.put('/users/:id', async (request, reply) => {
    const result = await controller.updateUser(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/users/:id', async (request, reply) => {
    const result = await controller.deleteUser(app, request)
    return reply.send(result)
  })
}

export default UsersRoutes
