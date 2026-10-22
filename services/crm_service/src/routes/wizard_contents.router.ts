import type { FastifyPluginAsync } from 'fastify'
import { WizardContentsService } from '../services/cpanels/wizard_contents/WizardContentsService'

const WizardContentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new WizardContentsService()

  app.get('/wizard_contents', async (request, reply) => {
    const result = await controller.listWizardContents(app, request)
    return reply.send(result)
  })
  app.post('/wizard_contents', async (request, reply) => {
    const result = await controller.createWizardContent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/wizard_contents/:id', async (request, reply) => {
    const result = await controller.getWizardContentsById(app, request)
    return reply.send(result)
  })
  app.put('/wizard_contents/:id', async (request, reply) => {
    const result = await controller.updateWizardContent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/wizard_contents/:id', async (request, reply) => {
    const result = await controller.deleteWizardContent(app, request)
    return reply.send(result)
  })
}

export default WizardContentsRoutes
