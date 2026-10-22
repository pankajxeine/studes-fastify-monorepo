import type { CrmCronLogsRequest } from './types/CrmCronLogsRequest'
import type { CrmCronLogsResponse } from './types/CrmCronLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmCronLogsController, ListItem, PaginatedResponse } from './CrmCronLogsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class CrmCronLogsService implements CrmCronLogsController {
      public async listCrmCronLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmCronLogsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.crm_cron_logs.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CrmCronLogsResponse[]>[],
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

      public async createCrmCronLog(app: FastifyInstance, input: CrmCronLogsRequest, request?: FastifyRequest): Promise<CrmCronLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.crm_cron_logs.schema(schema!);
      const row = await models.crm_cron_logs.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CrmCronLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCrmCronLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmCronLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.crm_cron_logs.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crm_cron_logs not found')
      }
      return row.get({ plain: true }) as CrmCronLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmCronLog(app: FastifyInstance, input: CrmCronLogsRequest, request?: FastifyRequest): Promise<CrmCronLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.crm_cron_logs.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crm_cron_logs not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmCronLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCrmCronLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.crm_cron_logs.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.crm_cron_logs.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
