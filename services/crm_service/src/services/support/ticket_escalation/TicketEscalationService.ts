import type { TicketEscalationRequest } from './types/TicketEscalationRequest'
import type { TicketEscalationUpdateRequest } from './types/TicketEscalationUpdateRequest'
import type { TicketEscalationResponse } from './types/TicketEscalationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TicketEscalationController } from './TicketEscalationController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TicketEscalationService implements TicketEscalationController {
      public async listTicketEscalation(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TicketEscalationResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_ticket_escalation.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TicketEscalationResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTicketEscalation(app: FastifyInstance, input: TicketEscalationRequest, request?: FastifyRequest): Promise<TicketEscalationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_ticket_escalation.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TicketEscalationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTicketEscalationById(app: FastifyInstance, request?: FastifyRequest): Promise<TicketEscalationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_ticket_escalation.schema(schema!);
      const { ticket_escalation_id } = (request?.params ?? {}) as { ticket_escalation_id?: string | number }
      if (ticket_escalation_id === undefined || ticket_escalation_id === '') throw httpError(400, 'ticket_escalation_id is required')
      const row = await model.findByPk(ticket_escalation_id)
      if (!row) {
        throw httpError(404, 'support_ticket_escalation not found')
      }
      return toApiAttributes<TicketEscalationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTicketEscalation(app: FastifyInstance, input: TicketEscalationUpdateRequest, request?: FastifyRequest): Promise<TicketEscalationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_ticket_escalation.schema(schema!);
      const { ticket_escalation_id } = (request?.params ?? {}) as { ticket_escalation_id?: string | number }
      if (ticket_escalation_id === undefined || ticket_escalation_id === '') throw httpError(400, 'ticket_escalation_id is required')
      const row = await model.findByPk(ticket_escalation_id)
      if (!row) {
        throw httpError(404, 'support_ticket_escalation not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TicketEscalationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTicketEscalation(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_ticket_escalation.schema(schema!);
      const { ticket_escalation_id } = (request?.params ?? {}) as { ticket_escalation_id?: string | number }
      if (ticket_escalation_id === undefined || ticket_escalation_id === '') throw httpError(400, 'ticket_escalation_id is required')
      const deletedCount = await model.destroy({ where: { ticketEscalationId: ticket_escalation_id } })
      if (deletedCount === 0) throw httpError(404, 'support_ticket_escalation not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
