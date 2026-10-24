import type { FastifyPluginAsync } from 'fastify'
import { DonationCampaignService } from '../../services/alumni/donation_campaign/DonationCampaignService'

const DonationCampaignRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DonationCampaignService()

  app.get('/donation_campaign', async (request, reply) => {
    const result = await controller.listDonationCampaign(app, request)
    return reply.send(result)
  })
  app.post('/donation_campaign', async (request, reply) => {
    const result = await controller.createDonationCampaign(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/donation_campaign/:id', async (request, reply) => {
    const result = await controller.getDonationCampaignById(app, request)
    return reply.send(result)
  })
  app.put('/donation_campaign/:id', async (request, reply) => {
    const result = await controller.updateDonationCampaign(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/donation_campaign/:id', async (request, reply) => {
    const result = await controller.deleteDonationCampaign(app, request)
    return reply.send(result)
  })
}

export default DonationCampaignRoutes
