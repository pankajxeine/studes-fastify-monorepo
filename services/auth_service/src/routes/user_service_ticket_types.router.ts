import type { FastifyPluginAsync } from 'fastify'
import { UserServiceTicketTypesService } from '../services/cpanel/user_service_ticket_types/UserServiceTicketTypesService'

const UserServiceTicketTypesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserServiceTicketTypesService()

  app.get('/user_service_ticket_types', async (request, reply) => {
    const result = await controller.listUserServiceTicketTypes(app, request)
    return reply.send(result)
  })
  app.post('/user_service_ticket_types', async (request, reply) => {
    const result = await controller.createUserServiceTicketType(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_service_ticket_types/:id', async (request, reply) => {
    const result = await controller.getUserServiceTicketTypesById(app, request)
    return reply.send(result)
  })
  app.put('/user_service_ticket_types/:id', async (request, reply) => {
    const result = await controller.updateUserServiceTicketType(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_service_ticket_types/:id', async (request, reply) => {
    const result = await controller.deleteUserServiceTicketType(app, request)
    return reply.send(result)
  })
}

export default UserServiceTicketTypesRoutes
