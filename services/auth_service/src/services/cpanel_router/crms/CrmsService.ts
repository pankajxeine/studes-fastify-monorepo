import type { CrmsRequest } from './types/CrmsRequest'
import type { CrmsResponse } from './types/CrmsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmsController, ListItem, PaginatedResponse } from './CrmsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CrmsService implements CrmsController {
      public async listCrms(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await models.crms.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CrmsResponse[]>[],
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

      public async createCrm(app: FastifyInstance, input: CrmsRequest, request?: FastifyRequest): Promise<CrmsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const row = await models.crms.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CrmsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCrmsById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.crms.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('crms not found')
      }
      return row.get({ plain: true }) as CrmsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrm(app: FastifyInstance, input: CrmsRequest, request?: FastifyRequest): Promise<CrmsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.crms.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('crms not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCrm(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.crms.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
