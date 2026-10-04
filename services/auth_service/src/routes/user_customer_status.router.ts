import type { FastifyPluginAsync } from 'fastify'
import { UserCustomerStatusService } from '../services/cpanel/user_customer_status/UserCustomerStatusService'

const UserCustomerStatusRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserCustomerStatusService()

  app.get('/user_customer_status', async (request, reply) => {
    const result = await controller.listUserCustomerStatus(app, request)
    return reply.send(result)
  })
  app.post('/user_customer_status', async (request, reply) => {
    const result = await controller.createUserCustomerStatu(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_customer_status/:id', async (request, reply) => {
    const result = await controller.getUserCustomerStatusById(app, request)
    return reply.send(result)
  })
  app.put('/user_customer_status/:id', async (request, reply) => {
    const result = await controller.updateUserCustomerStatu(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_customer_status/:id', async (request, reply) => {
    const result = await controller.deleteUserCustomerStatu(app, request)
    return reply.send(result)
  })
}

export default UserCustomerStatusRoutes
