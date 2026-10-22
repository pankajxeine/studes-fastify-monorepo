import type { FastifyPluginAsync } from 'fastify'
import { AdminUsersService } from '../services/cpanels/admin_users/AdminUsersService'

const AdminUsersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AdminUsersService()

  app.get('/admin_users', async (request, reply) => {
    const result = await controller.listAdminUsers(app, request)
    return reply.send(result)
  })
  app.post('/admin_users', async (request, reply) => {
    const result = await controller.createAdminUser(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/admin_users/:id', async (request, reply) => {
    const result = await controller.getAdminUsersById(app, request)
    return reply.send(result)
  })
  app.put('/admin_users/:id', async (request, reply) => {
    const result = await controller.updateAdminUser(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/admin_users/:id', async (request, reply) => {
    const result = await controller.deleteAdminUser(app, request)
    return reply.send(result)
  })
}

export default AdminUsersRoutes
