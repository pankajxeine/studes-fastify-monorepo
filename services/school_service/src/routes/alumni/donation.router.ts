import type { FastifyPluginAsync } from 'fastify'
import { DonationService } from '../../services/alumni/donation/DonationService'

const DonationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DonationService()

  app.get('/donation', async (request, reply) => {
    const result = await controller.listDonation(app, request)
    return reply.send(result)
  })
  app.post('/donation', async (request, reply) => {
    const result = await controller.createDonation(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/donation/:id', async (request, reply) => {
    const result = await controller.getDonationById(app, request)
    return reply.send(result)
  })
  app.put('/donation/:id', async (request, reply) => {
    const result = await controller.updateDonation(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/donation/:id', async (request, reply) => {
    const result = await controller.deleteDonation(app, request)
    return reply.send(result)
  })
}

export default DonationRoutes
