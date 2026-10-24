import type { LateFeeRuleRequest } from './types/LateFeeRuleRequest'
import type { LateFeeRuleUpdateRequest } from './types/LateFeeRuleUpdateRequest'
import type { LateFeeRuleResponse } from './types/LateFeeRuleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { LateFeeRuleController } from './LateFeeRuleController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class LateFeeRuleService implements LateFeeRuleController {
      public async listLateFeeRule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LateFeeRuleResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.fin_late_fee_rule.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<LateFeeRuleResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createLateFeeRule(app: FastifyInstance, input: LateFeeRuleRequest, request?: FastifyRequest): Promise<LateFeeRuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.fin_late_fee_rule.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<LateFeeRuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getLateFeeRuleById(app: FastifyInstance, request?: FastifyRequest): Promise<LateFeeRuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.fin_late_fee_rule.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const row = await model.findByPk(id)
      if (!row) {
        throw httpError(404, 'fin_late_fee_rule not found')
      }
      return toApiAttributes<LateFeeRuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateLateFeeRule(app: FastifyInstance, input: LateFeeRuleUpdateRequest, request?: FastifyRequest): Promise<LateFeeRuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.fin_late_fee_rule.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const row = await model.findByPk(id)
      if (!row) {
        throw httpError(404, 'fin_late_fee_rule not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<LateFeeRuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteLateFeeRule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.fin_late_fee_rule.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const deletedCount = await model.destroy({ where: { id } })
      if (deletedCount === 0) throw httpError(404, 'fin_late_fee_rule not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
