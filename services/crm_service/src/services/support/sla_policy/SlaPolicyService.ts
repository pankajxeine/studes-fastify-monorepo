import type { SlaPolicyRequest } from './types/SlaPolicyRequest'
import type { SlaPolicyUpdateRequest } from './types/SlaPolicyUpdateRequest'
import type { SlaPolicyResponse } from './types/SlaPolicyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SlaPolicyController } from './SlaPolicyController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SlaPolicyService implements SlaPolicyController {
      public async listSlaPolicy(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SlaPolicyResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_sla_policy.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SlaPolicyResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSlaPolicy(app: FastifyInstance, input: SlaPolicyRequest, request?: FastifyRequest): Promise<SlaPolicyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_sla_policy.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SlaPolicyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSlaPolicyById(app: FastifyInstance, request?: FastifyRequest): Promise<SlaPolicyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_sla_policy.schema(schema!);
      const { sla_policy_id } = (request?.params ?? {}) as { sla_policy_id?: string | number }
      if (sla_policy_id === undefined || sla_policy_id === '') throw httpError(400, 'sla_policy_id is required')
      const row = await model.findByPk(sla_policy_id)
      if (!row) {
        throw httpError(404, 'support_sla_policy not found')
      }
      return toApiAttributes<SlaPolicyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSlaPolicy(app: FastifyInstance, input: SlaPolicyUpdateRequest, request?: FastifyRequest): Promise<SlaPolicyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_sla_policy.schema(schema!);
      const { sla_policy_id } = (request?.params ?? {}) as { sla_policy_id?: string | number }
      if (sla_policy_id === undefined || sla_policy_id === '') throw httpError(400, 'sla_policy_id is required')
      const row = await model.findByPk(sla_policy_id)
      if (!row) {
        throw httpError(404, 'support_sla_policy not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SlaPolicyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSlaPolicy(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_sla_policy.schema(schema!);
      const { sla_policy_id } = (request?.params ?? {}) as { sla_policy_id?: string | number }
      if (sla_policy_id === undefined || sla_policy_id === '') throw httpError(400, 'sla_policy_id is required')
      const deletedCount = await model.destroy({ where: { slaPolicyId: sla_policy_id } })
      if (deletedCount === 0) throw httpError(404, 'support_sla_policy not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
