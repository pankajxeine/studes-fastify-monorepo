import type { CustomerExportTemplatesRequest } from './types/CustomerExportTemplatesRequest'
import type { CustomerExportTemplatesResponse } from './types/CustomerExportTemplatesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerExportTemplatesController } from './CustomerExportTemplatesController'

export class CustomerExportTemplatesService implements CustomerExportTemplatesController {
  public async listCustomerExportTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CustomerExportTemplatesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerExportTemplate(app: FastifyInstance, input: CustomerExportTemplatesRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerExportTemplatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCustomerExportTemplatesById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_export_templates not found')
      }
      return row.get({ plain: true }) as CustomerExportTemplatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomerExportTemplate(app: FastifyInstance, input: CustomerExportTemplatesRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_export_templates not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerExportTemplatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteCustomerExportTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
