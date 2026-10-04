import type { FastifyPluginAsync } from 'fastify'
import { UserAutogenerateReportsService } from '../services/cpanel/user_autogenerate_reports/UserAutogenerateReportsService'

const UserAutogenerateReportsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserAutogenerateReportsService()

  app.get('/user_autogenerate_reports', async (request, reply) => {
    const result = await controller.listUserAutogenerateReports(app, request)
    return reply.send(result)
  })
  app.post('/user_autogenerate_reports', async (request, reply) => {
    const result = await controller.createUserAutogenerateReport(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_autogenerate_reports/:id', async (request, reply) => {
    const result = await controller.getUserAutogenerateReportsById(app, request)
    return reply.send(result)
  })
  app.put('/user_autogenerate_reports/:id', async (request, reply) => {
    const result = await controller.updateUserAutogenerateReport(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_autogenerate_reports/:id', async (request, reply) => {
    const result = await controller.deleteUserAutogenerateReport(app, request)
    return reply.send(result)
  })
}

export default UserAutogenerateReportsRoutes
