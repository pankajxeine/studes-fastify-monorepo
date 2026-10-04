import type { FastifyPluginAsync } from 'fastify'
import { CustomerExportTemplatesFieldsService } from '../services/cpanel/customer_export_templates_fields/CustomerExportTemplatesFieldsService'

const CustomerExportTemplatesFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerExportTemplatesFieldsService()

  app.get('/customer_export_templates_fields', async (request, reply) => {
    const result = await controller.listCustomerExportTemplatesFields(app, request)
    return reply.send(result)
  })
  app.post('/customer_export_templates_fields', async (request, reply) => {
    const result = await controller.createCustomerExportTemplatesField(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_export_templates_fields/:id', async (request, reply) => {
    const result = await controller.getCustomerExportTemplatesFieldsById(app, request)
    return reply.send(result)
  })
  app.put('/customer_export_templates_fields/:id', async (request, reply) => {
    const result = await controller.updateCustomerExportTemplatesField(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_export_templates_fields/:id', async (request, reply) => {
    const result = await controller.deleteCustomerExportTemplatesField(app, request)
    return reply.send(result)
  })
}

export default CustomerExportTemplatesFieldsRoutes
