import type { IndustriesRequest } from './types/IndustriesRequest'
import type { IndustriesResponse } from './types/IndustriesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { IndustriesController, ListItem, PaginatedResponse } from './IndustriesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class IndustriesService implements IndustriesController {
      public async listIndustries(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IndustriesResponse[]>>> {
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
      const { count, rows } = await models.industries.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<IndustriesResponse[]>[],
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

      public async createIndustrie(app: FastifyInstance, input: IndustriesRequest, request?: FastifyRequest): Promise<IndustriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.industries.schema(schema!).create(input as any)
      return row.get({ plain: true }) as IndustriesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getIndustriesById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.industries.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('industries not found')
      }
      return row.get({ plain: true }) as IndustriesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateIndustrie(app: FastifyInstance, input: IndustriesRequest, request?: FastifyRequest): Promise<IndustriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.industries.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('industries not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as IndustriesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteIndustrie(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.industries.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
