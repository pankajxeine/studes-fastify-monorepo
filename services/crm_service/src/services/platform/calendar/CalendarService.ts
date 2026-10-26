import type { CalendarRequest } from './types/CalendarRequest'
import type { CalendarUpdateRequest } from './types/CalendarUpdateRequest'
import type { CalendarResponse } from './types/CalendarResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { CalendarController } from './CalendarController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class CalendarService implements CalendarController {
      public async listCalendar(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CalendarResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_calendar.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<CalendarResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createCalendar(app: FastifyInstance, input: CalendarRequest, request?: FastifyRequest): Promise<CalendarResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_calendar.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<CalendarResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCalendarById(app: FastifyInstance, request?: FastifyRequest): Promise<CalendarResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_calendar.schema(schema!);
      const { calendar_id } = (request?.params ?? {}) as { calendar_id?: string | number }
      if (calendar_id === undefined || calendar_id === '') throw httpError(400, 'calendar_id is required')
      const row = await model.findByPk(calendar_id)
      if (!row) {
        throw httpError(404, 'platform_calendar not found')
      }
      return toApiAttributes<CalendarResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCalendar(app: FastifyInstance, input: CalendarUpdateRequest, request?: FastifyRequest): Promise<CalendarResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_calendar.schema(schema!);
      const { calendar_id } = (request?.params ?? {}) as { calendar_id?: string | number }
      if (calendar_id === undefined || calendar_id === '') throw httpError(400, 'calendar_id is required')
      const row = await model.findByPk(calendar_id)
      if (!row) {
        throw httpError(404, 'platform_calendar not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<CalendarResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCalendar(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_calendar.schema(schema!);
      const { calendar_id } = (request?.params ?? {}) as { calendar_id?: string | number }
      if (calendar_id === undefined || calendar_id === '') throw httpError(400, 'calendar_id is required')
      const deletedCount = await model.destroy({ where: { calendarId: calendar_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_calendar not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
