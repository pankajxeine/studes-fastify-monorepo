import type { FastifyPluginAsync } from 'fastify'
import { CommonService } from '../services/common/CommonService'

const CommonRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CommonService()

  app.get('/cpanelroutes/:domain?', async (request, reply) => {
    
    return await reply.send(controller.cpanelRouteDomain(app, request))
  })
}

export default CommonRoutes
