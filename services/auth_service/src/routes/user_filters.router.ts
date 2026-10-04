import type { FastifyPluginAsync } from 'fastify'
import { UserFiltersService } from '../services/cpanel/user_filters/UserFiltersService'

const UserFiltersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserFiltersService()

  app.get('/user_filters', async (request, reply) => {
    const result = await controller.listUserFilters(app, request)
    return reply.send(result)
  })
  app.post('/user_filters', async (request, reply) => {
    const result = await controller.createUserFilter(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_filters/:id', async (request, reply) => {
    const result = await controller.getUserFiltersById(app, request)
    return reply.send(result)
  })
  app.put('/user_filters/:id', async (request, reply) => {
    const result = await controller.updateUserFilter(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_filters/:id', async (request, reply) => {
    const result = await controller.deleteUserFilter(app, request)
    return reply.send(result)
  })
}

export default UserFiltersRoutes
