import type { FastifyPluginAsync } from 'fastify'
import { CustomerExportTemplatesService } from '../services/cpanels/customer_export_templates/CustomerExportTemplatesService'

const CustomerExportTemplatesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerExportTemplatesService()

  app.get('/customer_export_templates', async (request, reply) => {
    const result = await controller.listCustomerExportTemplates(app, request)
    return reply.send(result)
  })
  app.post('/customer_export_templates', async (request, reply) => {
    const result = await controller.createCustomerExportTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_export_templates/:id', async (request, reply) => {
    const result = await controller.getCustomerExportTemplatesById(app, request)
    return reply.send(result)
  })
  app.put('/customer_export_templates/:id', async (request, reply) => {
    const result = await controller.updateCustomerExportTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_export_templates/:id', async (request, reply) => {
    const result = await controller.deleteCustomerExportTemplate(app, request)
    return reply.send(result)
  })
}

export default CustomerExportTemplatesRoutes
