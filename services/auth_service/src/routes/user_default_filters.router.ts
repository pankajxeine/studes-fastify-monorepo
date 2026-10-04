import type { FastifyPluginAsync } from 'fastify'
import { UserDefaultFiltersService } from '../services/cpanel/user_default_filters/UserDefaultFiltersService'

const UserDefaultFiltersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserDefaultFiltersService()

  app.get('/user_default_filters', async (request, reply) => {
    const result = await controller.listUserDefaultFilters(app, request)
    return reply.send(result)
  })
  app.post('/user_default_filters', async (request, reply) => {
    const result = await controller.createUserDefaultFilter(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_default_filters/:id', async (request, reply) => {
    const result = await controller.getUserDefaultFiltersById(app, request)
    return reply.send(result)
  })
  app.put('/user_default_filters/:id', async (request, reply) => {
    const result = await controller.updateUserDefaultFilter(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_default_filters/:id', async (request, reply) => {
    const result = await controller.deleteUserDefaultFilter(app, request)
    return reply.send(result)
  })
}

export default UserDefaultFiltersRoutes
