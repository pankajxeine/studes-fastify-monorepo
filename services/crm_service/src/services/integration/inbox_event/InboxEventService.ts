import type { InboxEventRequest } from './types/InboxEventRequest'
import type { InboxEventUpdateRequest } from './types/InboxEventUpdateRequest'
import type { InboxEventResponse } from './types/InboxEventResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { InboxEventController } from './InboxEventController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class InboxEventService implements InboxEventController {
      public async listInboxEvent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InboxEventResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_inbox_event.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<InboxEventResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createInboxEvent(app: FastifyInstance, input: InboxEventRequest, request?: FastifyRequest): Promise<InboxEventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_inbox_event.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<InboxEventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getInboxEventById(app: FastifyInstance, request?: FastifyRequest): Promise<InboxEventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_inbox_event.schema(schema!);
      const { inbox_event_id } = (request?.params ?? {}) as { inbox_event_id?: string | number }
      if (inbox_event_id === undefined || inbox_event_id === '') throw httpError(400, 'inbox_event_id is required')
      const row = await model.findByPk(inbox_event_id)
      if (!row) {
        throw httpError(404, 'integration_inbox_event not found')
      }
      return toApiAttributes<InboxEventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateInboxEvent(app: FastifyInstance, input: InboxEventUpdateRequest, request?: FastifyRequest): Promise<InboxEventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_inbox_event.schema(schema!);
      const { inbox_event_id } = (request?.params ?? {}) as { inbox_event_id?: string | number }
      if (inbox_event_id === undefined || inbox_event_id === '') throw httpError(400, 'inbox_event_id is required')
      const row = await model.findByPk(inbox_event_id)
      if (!row) {
        throw httpError(404, 'integration_inbox_event not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<InboxEventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteInboxEvent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_inbox_event.schema(schema!);
      const { inbox_event_id } = (request?.params ?? {}) as { inbox_event_id?: string | number }
      if (inbox_event_id === undefined || inbox_event_id === '') throw httpError(400, 'inbox_event_id is required')
      const deletedCount = await model.destroy({ where: { inboxEventId: inbox_event_id } })
      if (deletedCount === 0) throw httpError(404, 'integration_inbox_event not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
