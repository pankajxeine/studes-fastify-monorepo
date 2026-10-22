import type { FastifyPluginAsync } from 'fastify'
import { AlertSystemDetailsService } from '../services/cpanels/alert_system_details/AlertSystemDetailsService'

const AlertSystemDetailsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AlertSystemDetailsService()

  app.get('/alert_system_details', async (request, reply) => {
    const result = await controller.listAlertSystemDetails(app, request)
    return reply.send(result)
  })
  app.post('/alert_system_details', async (request, reply) => {
    const result = await controller.createAlertSystemDetail(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/alert_system_details/:id', async (request, reply) => {
    const result = await controller.getAlertSystemDetailsById(app, request)
    return reply.send(result)
  })
  app.put('/alert_system_details/:id', async (request, reply) => {
    const result = await controller.updateAlertSystemDetail(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/alert_system_details/:id', async (request, reply) => {
    const result = await controller.deleteAlertSystemDetail(app, request)
    return reply.send(result)
  })
}

export default AlertSystemDetailsRoutes
