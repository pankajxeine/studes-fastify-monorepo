import type { FastifyPluginAsync } from 'fastify'
import { CampaignService } from '../../services/crm/campaign/CampaignService'

const CampaignRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CampaignService()

  app.get('/campaign', { config: {"adminPermission":"crm.campaign.read"} }, async (request, reply) => {
    const result = await controller.listCampaign(app, request)
    return reply.send(result)
  })
  app.post('/campaign', { config: {"adminPermission":"crm.campaign.create"} }, async (request, reply) => {
    const result = await controller.createCampaign(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/campaign/:campaign_id', { config: {"adminPermission":"crm.campaign.read"} }, async (request, reply) => {
    const result = await controller.getCampaignById(app, request)
    return reply.send(result)
  })
  app.put('/campaign/:campaign_id', { config: {"adminPermission":"crm.campaign.update"} }, async (request, reply) => {
    const result = await controller.updateCampaign(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/campaign/:campaign_id', { config: {"adminPermission":"crm.campaign.delete"} }, async (request, reply) => {
    const result = await controller.deleteCampaign(app, request)
    return reply.send(result)
  })
}

export default CampaignRoutes
