import type { FastifyPluginAsync } from 'fastify'
import { CommonService } from '../../services/common/CommonService'

const CommonRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CommonService()

  app.get('/cpanelroutes/:domain?', { config: {"isPublic":true} }, async (request, reply) => {
    const result = await controller.cpanelRouteDomain(app, request)
    return reply.send(result)
  })
}

export default CommonRoutes
