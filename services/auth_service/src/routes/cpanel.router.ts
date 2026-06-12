import type { FastifyPluginAsync } from 'fastify'
import { CpanelService } from '../services/CpanelService'

const CpanelRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelService()
  app.get('/cpanel-users', async (request, reply) => {
    return await controller.getCpanelUsers(app, request)
  })
}

export default CpanelRoutes
