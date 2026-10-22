import type { DateFormatsRequest } from './types/DateFormatsRequest'
import type { DateFormatsResponse } from './types/DateFormatsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { DateFormatsController, ListItem, PaginatedResponse } from './DateFormatsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class DateFormatsService implements DateFormatsController {
      public async listDateFormats(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DateFormatsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.date_formats.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<DateFormatsResponse[]>[],
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

      public async createDateFormat(app: FastifyInstance, input: DateFormatsRequest, request?: FastifyRequest): Promise<DateFormatsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.date_formats.schema(schema!);
      const row = await models.date_formats.schema(schema!).create(input as any)
      return row.get({ plain: true }) as DateFormatsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getDateFormatsById(app: FastifyInstance, request?: FastifyRequest): Promise<DateFormatsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.date_formats.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('date_formats not found')
      }
      return row.get({ plain: true }) as DateFormatsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateDateFormat(app: FastifyInstance, input: DateFormatsRequest, request?: FastifyRequest): Promise<DateFormatsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.date_formats.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('date_formats not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as DateFormatsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteDateFormat(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.date_formats.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.date_formats.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
