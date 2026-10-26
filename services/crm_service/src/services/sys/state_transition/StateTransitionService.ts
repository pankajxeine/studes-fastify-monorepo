import type { StateTransitionRequest } from './types/StateTransitionRequest'
import type { StateTransitionUpdateRequest } from './types/StateTransitionUpdateRequest'
import type { StateTransitionResponse } from './types/StateTransitionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { StateTransitionController } from './StateTransitionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class StateTransitionService implements StateTransitionController {
      public async listStateTransition(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StateTransitionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.sys_state_transition.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<StateTransitionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createStateTransition(app: FastifyInstance, input: StateTransitionRequest, request?: FastifyRequest): Promise<StateTransitionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.sys_state_transition.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<StateTransitionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getStateTransitionById(app: FastifyInstance, request?: FastifyRequest): Promise<StateTransitionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.sys_state_transition.schema(schema!);
      const { state_transition_id } = (request?.params ?? {}) as { state_transition_id?: string | number }
      if (state_transition_id === undefined || state_transition_id === '') throw httpError(400, 'state_transition_id is required')
      const row = await model.findByPk(state_transition_id)
      if (!row) {
        throw httpError(404, 'sys_state_transition not found')
      }
      return toApiAttributes<StateTransitionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateStateTransition(app: FastifyInstance, input: StateTransitionUpdateRequest, request?: FastifyRequest): Promise<StateTransitionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.sys_state_transition.schema(schema!);
      const { state_transition_id } = (request?.params ?? {}) as { state_transition_id?: string | number }
      if (state_transition_id === undefined || state_transition_id === '') throw httpError(400, 'state_transition_id is required')
      const row = await model.findByPk(state_transition_id)
      if (!row) {
        throw httpError(404, 'sys_state_transition not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<StateTransitionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteStateTransition(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.sys_state_transition.schema(schema!);
      const { state_transition_id } = (request?.params ?? {}) as { state_transition_id?: string | number }
      if (state_transition_id === undefined || state_transition_id === '') throw httpError(400, 'state_transition_id is required')
      const deletedCount = await model.destroy({ where: { stateTransitionId: state_transition_id } })
      if (deletedCount === 0) throw httpError(404, 'sys_state_transition not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
