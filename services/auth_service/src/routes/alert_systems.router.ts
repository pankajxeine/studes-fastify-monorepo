import type { FastifyPluginAsync } from 'fastify'
import { AlertSystemsService } from '../services/cpanel/alert_systems/AlertSystemsService'

const AlertSystemsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AlertSystemsService()

  app.get('/alert_systems', async (request, reply) => {
    const result = await controller.listAlertSystems(app, request)
    return reply.send(result)
  })
  app.post('/alert_systems', async (request, reply) => {
    const result = await controller.createAlertSystem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/alert_systems/:id', async (request, reply) => {
    const result = await controller.getAlertSystemsById(app, request)
    return reply.send(result)
  })
  app.put('/alert_systems/:id', async (request, reply) => {
    const result = await controller.updateAlertSystem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/alert_systems/:id', async (request, reply) => {
    const result = await controller.deleteAlertSystem(app, request)
    return reply.send(result)
  })
}

export default AlertSystemsRoutes
