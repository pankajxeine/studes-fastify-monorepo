import type { IndustryModulesRequest } from './types/IndustryModulesRequest'
import type { IndustryModulesResponse } from './types/IndustryModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { IndustryModulesController, ListItem, PaginatedResponse } from './IndustryModulesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class IndustryModulesService implements IndustryModulesController {
      public async listIndustryModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IndustryModulesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await models.industry_modules.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<IndustryModulesResponse[]>[],
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

      public async createIndustryModule(app: FastifyInstance, input: IndustryModulesRequest, request?: FastifyRequest): Promise<IndustryModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.industry_modules.schema(schema!).create(input as any)
      return row.get({ plain: true }) as IndustryModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getIndustryModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.industry_modules.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('industry_modules not found')
      }
      return row.get({ plain: true }) as IndustryModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateIndustryModule(app: FastifyInstance, input: IndustryModulesRequest, request?: FastifyRequest): Promise<IndustryModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.industry_modules.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('industry_modules not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as IndustryModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteIndustryModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.industry_modules.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
