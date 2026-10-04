import type { FilterModuleFieldsRequest } from './types/FilterModuleFieldsRequest'
import type { FilterModuleFieldsResponse } from './types/FilterModuleFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { FilterModuleFieldsController, ListItem, PaginatedResponse } from './FilterModuleFieldsController'

export class FilterModuleFieldsService implements FilterModuleFieldsController {
      public async listFilterModuleFields(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FilterModuleFieldsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.filter_module_fields.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<FilterModuleFieldsResponse[]>[],
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

      public async createFilterModuleField(app: FastifyInstance, input: FilterModuleFieldsRequest, request?: FastifyRequest): Promise<FilterModuleFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.filter_module_fields.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as FilterModuleFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getFilterModuleFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<FilterModuleFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.filter_module_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('filter_module_fields not found')
      }
      return row.get({ plain: true }) as FilterModuleFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateFilterModuleField(app: FastifyInstance, input: FilterModuleFieldsRequest, request?: FastifyRequest): Promise<FilterModuleFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.filter_module_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('filter_module_fields not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as FilterModuleFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteFilterModuleField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.filter_module_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
