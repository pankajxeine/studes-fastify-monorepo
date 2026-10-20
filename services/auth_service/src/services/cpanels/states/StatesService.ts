import type { StatesRequest } from './types/StatesRequest'
import type { StatesResponse } from './types/StatesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { StatesController, ListItem, PaginatedResponse } from './StatesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class StatesService implements StatesController {
      public async listStates(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StatesResponse[]>>> {
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
      const { count, rows } = await models.states.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<StatesResponse[]>[],
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

      public async createState(app: FastifyInstance, input: StatesRequest, request?: FastifyRequest): Promise<StatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.states.schema(schema!).create(input as any)
      return row.get({ plain: true }) as StatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getStatesById(app: FastifyInstance, request?: FastifyRequest): Promise<StatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.states.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('states not found')
      }
      return row.get({ plain: true }) as StatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateState(app: FastifyInstance, input: StatesRequest, request?: FastifyRequest): Promise<StatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.states.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('states not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as StatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteState(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.states.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
