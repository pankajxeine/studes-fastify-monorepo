import type { FastifyPluginAsync } from 'fastify'
import { CustomerStatusTimeLogsService } from '../services/customer_status_time_logs/CustomerStatusTimeLogsService'

const CustomerStatusTimeLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerStatusTimeLogsService()
  app.get('/customer_status_time_logs', async (request, reply) => {
     return await reply.send(controller.listCustomerStatusTimeLogs(app, request))
  })
  app.post('/customer_status_time_logs', async (request, reply) => {
     return await reply.send(controller.createCustomerStatusTimeLog(app, request.body as any, request))
  })
  app.get('/customer_status_time_logs/:id', async (request, reply) => {
     return await reply.send(controller.getCustomerStatusTimeLogsById(app, request))
  })
  app.put('/customer_status_time_logs/:id', async (request, reply) => {
     return await reply.send(controller.updateCustomerStatusTimeLog(app, request.body as any, request))
  })
  app.delete('/customer_status_time_logs/:id', async (request, reply) => {
      await controller.deleteCustomerStatusTimeLog(app, request) 

             reply.code(201) 
          
  })
}

export default CustomerStatusTimeLogsRoutes
