import type { VerifoneLogsRequest } from './types/VerifoneLogsRequest'
import type { VerifoneLogsResponse } from './types/VerifoneLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { VerifoneLogsController, ListItem, PaginatedResponse } from './VerifoneLogsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class VerifoneLogsService implements VerifoneLogsController {
      public async listVerifoneLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<VerifoneLogsResponse[]>>> {
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
      const { count, rows } = await models.verifone_logs.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<VerifoneLogsResponse[]>[],
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

      public async createVerifoneLog(app: FastifyInstance, input: VerifoneLogsRequest, request?: FastifyRequest): Promise<VerifoneLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.verifone_logs.schema(schema!).create(input as any)
      return row.get({ plain: true }) as VerifoneLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getVerifoneLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<VerifoneLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.verifone_logs.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('verifone_logs not found')
      }
      return row.get({ plain: true }) as VerifoneLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateVerifoneLog(app: FastifyInstance, input: VerifoneLogsRequest, request?: FastifyRequest): Promise<VerifoneLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.verifone_logs.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('verifone_logs not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as VerifoneLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteVerifoneLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.verifone_logs.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
