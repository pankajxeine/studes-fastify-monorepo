import type { CustomerExportTemplatesFieldsRequest } from './types/CustomerExportTemplatesFieldsRequest'
import type { CustomerExportTemplatesFieldsResponse } from './types/CustomerExportTemplatesFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerExportTemplatesFieldsController, ListItem, PaginatedResponse } from './CustomerExportTemplatesFieldsController'

export class CustomerExportTemplatesFieldsService implements CustomerExportTemplatesFieldsController {
      public async listCustomerExportTemplatesFields(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerExportTemplatesFieldsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_export_templates_fields.schema(schema!)
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await model.findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CustomerExportTemplatesFieldsResponse[]>[],
        pagination: {
          page,
          limit,
          total: count,
          totalPages: Math.ceil(count / limit),
        },
      }
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createCustomerExportTemplatesField(app: FastifyInstance, input: CustomerExportTemplatesFieldsRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
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
      const schema = request?.cpanelDbSchema;
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
      const schema = request?.cpanelDbSchema;
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
      const schema = request?.cpanelDbSchema;
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
