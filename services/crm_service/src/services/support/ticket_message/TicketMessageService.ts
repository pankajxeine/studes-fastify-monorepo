import type { TicketMessageRequest } from './types/TicketMessageRequest'
import type { TicketMessageUpdateRequest } from './types/TicketMessageUpdateRequest'
import type { TicketMessageResponse } from './types/TicketMessageResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TicketMessageController } from './TicketMessageController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TicketMessageService implements TicketMessageController {
      public async listTicketMessage(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TicketMessageResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_ticket_message.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TicketMessageResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTicketMessage(app: FastifyInstance, input: TicketMessageRequest, request?: FastifyRequest): Promise<TicketMessageResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_ticket_message.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TicketMessageResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTicketMessageById(app: FastifyInstance, request?: FastifyRequest): Promise<TicketMessageResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_ticket_message.schema(schema!);
      const { ticket_message_id } = (request?.params ?? {}) as { ticket_message_id?: string | number }
      if (ticket_message_id === undefined || ticket_message_id === '') throw httpError(400, 'ticket_message_id is required')
      const row = await model.findByPk(ticket_message_id)
      if (!row) {
        throw httpError(404, 'support_ticket_message not found')
      }
      return toApiAttributes<TicketMessageResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTicketMessage(app: FastifyInstance, input: TicketMessageUpdateRequest, request?: FastifyRequest): Promise<TicketMessageResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_ticket_message.schema(schema!);
      const { ticket_message_id } = (request?.params ?? {}) as { ticket_message_id?: string | number }
      if (ticket_message_id === undefined || ticket_message_id === '') throw httpError(400, 'ticket_message_id is required')
      const row = await model.findByPk(ticket_message_id)
      if (!row) {
        throw httpError(404, 'support_ticket_message not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TicketMessageResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTicketMessage(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_ticket_message.schema(schema!);
      const { ticket_message_id } = (request?.params ?? {}) as { ticket_message_id?: string | number }
      if (ticket_message_id === undefined || ticket_message_id === '') throw httpError(400, 'ticket_message_id is required')
      const deletedCount = await model.destroy({ where: { ticketMessageId: ticket_message_id } })
      if (deletedCount === 0) throw httpError(404, 'support_ticket_message not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
