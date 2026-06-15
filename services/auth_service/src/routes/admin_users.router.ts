import type { FastifyPluginAsync } from 'fastify'
import { AdminUsersService } from '../services/admin_users/AdminUsersService'

const AdminUsersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AdminUsersService()
  app.get('/admin_users', async (request, reply) => {
     return await reply.send(controller.listAdminUsers(app, request))
  })
  app.post('/admin_users', async (request, reply) => {
     return await reply.send(controller.createAdminUser(app, request.body as any, request))
  })
  app.get('/admin_users/:id', async (request, reply) => {
     return await reply.send(controller.getAdminUsersById(app, request))
  })
  app.put('/admin_users/:id', async (request, reply) => {
     return await reply.send(controller.updateAdminUser(app, request.body as any, request))
  })
  app.delete('/admin_users/:id', async (request, reply) => {
      await controller.deleteAdminUser(app, request) 

             reply.code(201) 
          
  })
}

export default AdminUsersRoutes
