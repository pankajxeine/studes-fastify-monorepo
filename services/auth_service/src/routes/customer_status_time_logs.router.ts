import type { FastifyPluginAsync } from 'fastify'
import { CustomerStatusTimeLogsService } from '../services/cpanel/customer_status_time_logs/CustomerStatusTimeLogsService'

const CustomerStatusTimeLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerStatusTimeLogsService()

  app.get('/customer_status_time_logs', async (request, reply) => {
    const result = await controller.listCustomerStatusTimeLogs(app, request)
    return reply.send(result)
  })
  app.post('/customer_status_time_logs', async (request, reply) => {
    const result = await controller.createCustomerStatusTimeLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_status_time_logs/:id', async (request, reply) => {
    const result = await controller.getCustomerStatusTimeLogsById(app, request)
    return reply.send(result)
  })
  app.put('/customer_status_time_logs/:id', async (request, reply) => {
    const result = await controller.updateCustomerStatusTimeLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_status_time_logs/:id', async (request, reply) => {
    const result = await controller.deleteCustomerStatusTimeLog(app, request)
    return reply.send(result)
  })
}

export default CustomerStatusTimeLogsRoutes
