import type { EventRequest } from './types/EventRequest'
import type { EventUpdateRequest } from './types/EventUpdateRequest'
import type { EventResponse } from './types/EventResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { EventController } from './EventController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class EventService implements EventController {
      public async listEvent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EventResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_event.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<EventResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createEvent(app: FastifyInstance, input: EventRequest, request?: FastifyRequest): Promise<EventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_event.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<EventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getEventById(app: FastifyInstance, request?: FastifyRequest): Promise<EventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_event.schema(schema!);
      const { event_id } = (request?.params ?? {}) as { event_id?: string | number }
      if (event_id === undefined || event_id === '') throw httpError(400, 'event_id is required')
      const row = await model.findByPk(event_id)
      if (!row) {
        throw httpError(404, 'audit_event not found')
      }
      return toApiAttributes<EventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateEvent(app: FastifyInstance, input: EventUpdateRequest, request?: FastifyRequest): Promise<EventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_event.schema(schema!);
      const { event_id } = (request?.params ?? {}) as { event_id?: string | number }
      if (event_id === undefined || event_id === '') throw httpError(400, 'event_id is required')
      const row = await model.findByPk(event_id)
      if (!row) {
        throw httpError(404, 'audit_event not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<EventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteEvent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_event.schema(schema!);
      const { event_id } = (request?.params ?? {}) as { event_id?: string | number }
      if (event_id === undefined || event_id === '') throw httpError(400, 'event_id is required')
      const deletedCount = await model.destroy({ where: { eventId: event_id } })
      if (deletedCount === 0) throw httpError(404, 'audit_event not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
