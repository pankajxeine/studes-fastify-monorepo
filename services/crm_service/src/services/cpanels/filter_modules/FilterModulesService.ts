import type { FilterModulesRequest } from './types/FilterModulesRequest'
import type { FilterModulesResponse } from './types/FilterModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { FilterModulesController, ListItem, PaginatedResponse } from './FilterModulesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class FilterModulesService implements FilterModulesController {
      public async listFilterModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FilterModulesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.filter_modules.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<FilterModulesResponse[]>[],
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

      public async createFilterModule(app: FastifyInstance, input: FilterModulesRequest, request?: FastifyRequest): Promise<FilterModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.filter_modules.schema(schema!);
      const row = await models.filter_modules.schema(schema!).create(input as any)
      return row.get({ plain: true }) as FilterModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getFilterModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<FilterModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.filter_modules.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('filter_modules not found')
      }
      return row.get({ plain: true }) as FilterModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateFilterModule(app: FastifyInstance, input: FilterModulesRequest, request?: FastifyRequest): Promise<FilterModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.filter_modules.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('filter_modules not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as FilterModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteFilterModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.filter_modules.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.filter_modules.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
