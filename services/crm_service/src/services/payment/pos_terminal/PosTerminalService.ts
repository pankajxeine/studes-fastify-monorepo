import type { PosTerminalRequest } from './types/PosTerminalRequest'
import type { PosTerminalUpdateRequest } from './types/PosTerminalUpdateRequest'
import type { PosTerminalResponse } from './types/PosTerminalResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PosTerminalController } from './PosTerminalController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PosTerminalService implements PosTerminalController {
      public async listPosTerminal(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PosTerminalResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_pos_terminal.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PosTerminalResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPosTerminal(app: FastifyInstance, input: PosTerminalRequest, request?: FastifyRequest): Promise<PosTerminalResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_pos_terminal.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PosTerminalResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPosTerminalById(app: FastifyInstance, request?: FastifyRequest): Promise<PosTerminalResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_pos_terminal.schema(schema!);
      const { pos_terminal_id } = (request?.params ?? {}) as { pos_terminal_id?: string | number }
      if (pos_terminal_id === undefined || pos_terminal_id === '') throw httpError(400, 'pos_terminal_id is required')
      const row = await model.findByPk(pos_terminal_id)
      if (!row) {
        throw httpError(404, 'payment_pos_terminal not found')
      }
      return toApiAttributes<PosTerminalResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePosTerminal(app: FastifyInstance, input: PosTerminalUpdateRequest, request?: FastifyRequest): Promise<PosTerminalResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_pos_terminal.schema(schema!);
      const { pos_terminal_id } = (request?.params ?? {}) as { pos_terminal_id?: string | number }
      if (pos_terminal_id === undefined || pos_terminal_id === '') throw httpError(400, 'pos_terminal_id is required')
      const row = await model.findByPk(pos_terminal_id)
      if (!row) {
        throw httpError(404, 'payment_pos_terminal not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PosTerminalResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePosTerminal(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_pos_terminal.schema(schema!);
      const { pos_terminal_id } = (request?.params ?? {}) as { pos_terminal_id?: string | number }
      if (pos_terminal_id === undefined || pos_terminal_id === '') throw httpError(400, 'pos_terminal_id is required')
      const deletedCount = await model.destroy({ where: { posTerminalId: pos_terminal_id } })
      if (deletedCount === 0) throw httpError(404, 'payment_pos_terminal not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
