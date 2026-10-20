import type { CrmEmailLogsRequest } from './types/CrmEmailLogsRequest'
import type { CrmEmailLogsResponse } from './types/CrmEmailLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmEmailLogsController, ListItem, PaginatedResponse } from './CrmEmailLogsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CrmEmailLogsService implements CrmEmailLogsController {
      public async listCrmEmailLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmEmailLogsResponse[]>>> {
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
      const { count, rows } = await models.crm_email_logs.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CrmEmailLogsResponse[]>[],
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

      public async createCrmEmailLog(app: FastifyInstance, input: CrmEmailLogsRequest, request?: FastifyRequest): Promise<CrmEmailLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.crm_email_logs.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CrmEmailLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCrmEmailLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmEmailLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.crm_email_logs.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('crm_email_logs not found')
      }
      return row.get({ plain: true }) as CrmEmailLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmEmailLog(app: FastifyInstance, input: CrmEmailLogsRequest, request?: FastifyRequest): Promise<CrmEmailLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.crm_email_logs.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('crm_email_logs not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmEmailLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCrmEmailLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.crm_email_logs.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
