import type { IndustryEnvironmentsRequest } from './types/IndustryEnvironmentsRequest'
import type { IndustryEnvironmentsResponse } from './types/IndustryEnvironmentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { IndustryEnvironmentsController, ListItem, PaginatedResponse } from './IndustryEnvironmentsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class IndustryEnvironmentsService implements IndustryEnvironmentsController {
      public async listIndustryEnvironments(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IndustryEnvironmentsResponse[]>>> {
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
      const { count, rows } = await models.industry_environments.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<IndustryEnvironmentsResponse[]>[],
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

      public async createIndustryEnvironment(app: FastifyInstance, input: IndustryEnvironmentsRequest, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.industry_environments.schema(schema!).create(input as any)
      return row.get({ plain: true }) as IndustryEnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getIndustryEnvironmentsById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.industry_environments.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('industry_environments not found')
      }
      return row.get({ plain: true }) as IndustryEnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateIndustryEnvironment(app: FastifyInstance, input: IndustryEnvironmentsRequest, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.industry_environments.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('industry_environments not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as IndustryEnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteIndustryEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.industry_environments.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
