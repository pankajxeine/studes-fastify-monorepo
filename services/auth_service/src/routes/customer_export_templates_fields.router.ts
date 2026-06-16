import type { FastifyPluginAsync } from 'fastify'
import { CustomerExportTemplatesFieldsService } from '../services/cpanels/customer_export_templates_fields/CustomerExportTemplatesFieldsService'

const CustomerExportTemplatesFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerExportTemplatesFieldsService()
  app.get('/customer_export_templates_fields', async (request, reply) => {
     return await reply.send(controller.listCustomerExportTemplatesFields(app, request))
  })
  app.post('/customer_export_templates_fields', async (request, reply) => {
     return await reply.send(controller.createCustomerExportTemplatesField(app, request.body as any, request))
  })
  app.get('/customer_export_templates_fields/:id', async (request, reply) => {
     return await reply.send(controller.getCustomerExportTemplatesFieldsById(app, request))
  })
  app.put('/customer_export_templates_fields/:id', async (request, reply) => {
     return await reply.send(controller.updateCustomerExportTemplatesField(app, request.body as any, request))
  })
  app.delete('/customer_export_templates_fields/:id', async (request, reply) => {
      await controller.deleteCustomerExportTemplatesField(app, request) 

             reply.code(201) 
          
  })
}

export default CustomerExportTemplatesFieldsRoutes
