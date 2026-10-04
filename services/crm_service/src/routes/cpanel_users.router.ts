import type { FastifyPluginAsync } from 'fastify'
import { CpanelUsersService } from '../services/cpanel_users/CpanelUsersService'

const CpanelUsersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelUsersService()

  app.post('/sales/cpanel/users', async (request, reply) => {
    const result = await controller.createSalesCpanelUser(app, request.body as any, request)
    return reply.send(result)
  })
}

export default CpanelUsersRoutes
