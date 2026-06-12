import type { FastifyPluginAsync } from 'fastify'
import { CpanelRouteService } from '../services/CpanelRouteService'

const CpanelRouteRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelRouteService()
  app.get('/cpanelroutes/:domain?', async (request, reply) => {
    return await controller.cpanelRouteDomain(app, request)
  })
}

export default CpanelRouteRoutes
