import type { FastifyPluginAsync } from 'fastify'
import { UserSalesAgentsService } from '../services/cpanel/user_sales_agents/UserSalesAgentsService'

const UserSalesAgentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserSalesAgentsService()

  app.get('/user_sales_agents', async (request, reply) => {
    const result = await controller.listUserSalesAgents(app, request)
    return reply.send(result)
  })
  app.post('/user_sales_agents', async (request, reply) => {
    const result = await controller.createUserSalesAgent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_sales_agents/:id', async (request, reply) => {
    const result = await controller.getUserSalesAgentsById(app, request)
    return reply.send(result)
  })
  app.put('/user_sales_agents/:id', async (request, reply) => {
    const result = await controller.updateUserSalesAgent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_sales_agents/:id', async (request, reply) => {
    const result = await controller.deleteUserSalesAgent(app, request)
    return reply.send(result)
  })
}

export default UserSalesAgentsRoutes
