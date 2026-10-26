import type { FastifyPluginAsync } from 'fastify'
import { CommonService } from '../../services/common/CommonService'

const CommonRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CommonService()

  app.post('/cpanel/organizations', { config: {"adminPermission":"cpanel.organization.create","adminRequiredRole":"super_admin"} }, async (request, reply) => {
    const result = await controller.onboardCrmOrganization(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/cpanelroutes/:domain?', { config: {"isPublic":true} }, async (request, reply) => {
    const result = await controller.cpanelRouteDomain(app, request)
    return reply.send(result)
  })
}

export default CommonRoutes
