import type { FastifyPluginAsync } from 'fastify'
import { CustomerExportTemplatesService } from '../services/cpanel/customer_export_templates/CustomerExportTemplatesService'

const CustomerExportTemplatesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerExportTemplatesService()

  app.get('/customer_export_templates', async (request, reply) => {

    return await reply.send(controller.listCustomerExportTemplates(app, request))
  })
  app.post('/customer_export_templates', async (request, reply) => {
    return await reply.send(controller.createCustomerExportTemplate(app, request.body as any, request))
  })
  app.get('/customer_export_templates/:id', async (request, reply) => {

    return await reply.send(controller.getCustomerExportTemplatesById(app, request))
  })
  app.put('/customer_export_templates/:id', async (request, reply) => {
    return await reply.send(controller.updateCustomerExportTemplate(app, request.body as any, request))
  })
  app.delete('/customer_export_templates/:id', async (request, reply) => {

    return await reply.send(controller.deleteCustomerExportTemplate(app, request))
  })
}

export default CustomerExportTemplatesRoutes
