import type { OutboxEventRequest } from './types/OutboxEventRequest'
import type { OutboxEventUpdateRequest } from './types/OutboxEventUpdateRequest'
import type { OutboxEventResponse } from './types/OutboxEventResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { OutboxEventController } from './OutboxEventController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class OutboxEventService implements OutboxEventController {
      public async listOutboxEvent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OutboxEventResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_outbox_event.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<OutboxEventResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createOutboxEvent(app: FastifyInstance, input: OutboxEventRequest, request?: FastifyRequest): Promise<OutboxEventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_outbox_event.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<OutboxEventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getOutboxEventById(app: FastifyInstance, request?: FastifyRequest): Promise<OutboxEventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_outbox_event.schema(schema!);
      const { event_id } = (request?.params ?? {}) as { event_id?: string | number }
      if (event_id === undefined || event_id === '') throw httpError(400, 'event_id is required')
      const row = await model.findByPk(event_id)
      if (!row) {
        throw httpError(404, 'integration_outbox_event not found')
      }
      return toApiAttributes<OutboxEventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateOutboxEvent(app: FastifyInstance, input: OutboxEventUpdateRequest, request?: FastifyRequest): Promise<OutboxEventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_outbox_event.schema(schema!);
      const { event_id } = (request?.params ?? {}) as { event_id?: string | number }
      if (event_id === undefined || event_id === '') throw httpError(400, 'event_id is required')
      const row = await model.findByPk(event_id)
      if (!row) {
        throw httpError(404, 'integration_outbox_event not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<OutboxEventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteOutboxEvent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_outbox_event.schema(schema!);
      const { event_id } = (request?.params ?? {}) as { event_id?: string | number }
      if (event_id === undefined || event_id === '') throw httpError(400, 'event_id is required')
      const deletedCount = await model.destroy({ where: { eventId: event_id } })
      if (deletedCount === 0) throw httpError(404, 'integration_outbox_event not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
