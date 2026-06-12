import type { FastifyPluginAsync } from 'fastify'
import { CpanelUsersService } from '../services/CpanelUsersService'

const CpanelUsersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelUsersService()
  app.post('/sales/cpanel/users', async (request, reply) => {
    return await controller.createSalesCpanelUser(app, request.body as any, request)
  })
}

export default CpanelUsersRoutes
