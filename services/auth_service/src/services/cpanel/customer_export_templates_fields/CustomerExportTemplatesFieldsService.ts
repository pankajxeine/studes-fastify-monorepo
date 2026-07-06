import type { CustomerExportTemplatesFieldsRequest } from './types/CustomerExportTemplatesFieldsRequest'
import type { CustomerExportTemplatesFieldsResponse } from './types/CustomerExportTemplatesFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerExportTemplatesFieldsController } from './CustomerExportTemplatesFieldsController'

export class CustomerExportTemplatesFieldsService implements CustomerExportTemplatesFieldsController {
  public async listCustomerExportTemplatesFields(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates_fields.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CustomerExportTemplatesFieldsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerExportTemplatesField(app: FastifyInstance, input: CustomerExportTemplatesFieldsRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates_fields.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerExportTemplatesFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCustomerExportTemplatesFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_export_templates_fields not found')
      }
      return row.get({ plain: true }) as CustomerExportTemplatesFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomerExportTemplatesField(app: FastifyInstance, input: CustomerExportTemplatesFieldsRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_export_templates_fields not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerExportTemplatesFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteCustomerExportTemplatesField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
