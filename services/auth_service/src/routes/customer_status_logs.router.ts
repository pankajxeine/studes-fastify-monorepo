import type { FastifyPluginAsync } from 'fastify'
import { CustomerStatusLogsService } from '../services/cpanels/customer_status_logs/CustomerStatusLogsService'

const CustomerStatusLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerStatusLogsService()

  app.get('/customer_status_logs', async (request, reply) => {
    const result = await controller.listCustomerStatusLogs(app, request)
    return reply.send(result)
  })
  app.post('/customer_status_logs', async (request, reply) => {
    const result = await controller.createCustomerStatusLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_status_logs/:id', async (request, reply) => {
    const result = await controller.getCustomerStatusLogsById(app, request)
    return reply.send(result)
  })
  app.put('/customer_status_logs/:id', async (request, reply) => {
    const result = await controller.updateCustomerStatusLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_status_logs/:id', async (request, reply) => {
    const result = await controller.deleteCustomerStatusLog(app, request)
    return reply.send(result)
  })
}

export default CustomerStatusLogsRoutes
