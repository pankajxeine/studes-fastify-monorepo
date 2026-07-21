import type { FastifyPluginAsync } from 'fastify'
import { CustomerStatusLogsService } from '../services/cpanel/customer_status_logs/CustomerStatusLogsService'

const CustomerStatusLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerStatusLogsService()

  app.get('/customer_status_logs', async (request, reply) => {

    return await reply.send(controller.listCustomerStatusLogs(app, request))
  })
  app.post('/customer_status_logs', async (request, reply) => {
    return await reply.send(controller.createCustomerStatusLog(app, request.body as any, request))
  })
  app.get('/customer_status_logs/:id', async (request, reply) => {

    return await reply.send(controller.getCustomerStatusLogsById(app, request))
  })
  app.put('/customer_status_logs/:id', async (request, reply) => {
    return await reply.send(controller.updateCustomerStatusLog(app, request.body as any, request))
  })
  app.delete('/customer_status_logs/:id', async (request, reply) => {

    return await reply.send(controller.deleteCustomerStatusLog(app, request))
  })
}

export default CustomerStatusLogsRoutes
