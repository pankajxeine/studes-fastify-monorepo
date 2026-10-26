import type { CommissionRuleRequest } from './types/CommissionRuleRequest'
import type { CommissionRuleUpdateRequest } from './types/CommissionRuleUpdateRequest'
import type { CommissionRuleResponse } from './types/CommissionRuleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { CommissionRuleController } from './CommissionRuleController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class CommissionRuleService implements CommissionRuleController {
      public async listCommissionRule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CommissionRuleResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_rule.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<CommissionRuleResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createCommissionRule(app: FastifyInstance, input: CommissionRuleRequest, request?: FastifyRequest): Promise<CommissionRuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_rule.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<CommissionRuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCommissionRuleById(app: FastifyInstance, request?: FastifyRequest): Promise<CommissionRuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_rule.schema(schema!);
      const { commission_rule_id } = (request?.params ?? {}) as { commission_rule_id?: string | number }
      if (commission_rule_id === undefined || commission_rule_id === '') throw httpError(400, 'commission_rule_id is required')
      const row = await model.findByPk(commission_rule_id)
      if (!row) {
        throw httpError(404, 'commission_commission_rule not found')
      }
      return toApiAttributes<CommissionRuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCommissionRule(app: FastifyInstance, input: CommissionRuleUpdateRequest, request?: FastifyRequest): Promise<CommissionRuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_rule.schema(schema!);
      const { commission_rule_id } = (request?.params ?? {}) as { commission_rule_id?: string | number }
      if (commission_rule_id === undefined || commission_rule_id === '') throw httpError(400, 'commission_rule_id is required')
      const row = await model.findByPk(commission_rule_id)
      if (!row) {
        throw httpError(404, 'commission_commission_rule not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<CommissionRuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCommissionRule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_rule.schema(schema!);
      const { commission_rule_id } = (request?.params ?? {}) as { commission_rule_id?: string | number }
      if (commission_rule_id === undefined || commission_rule_id === '') throw httpError(400, 'commission_rule_id is required')
      const deletedCount = await model.destroy({ where: { commissionRuleId: commission_rule_id } })
      if (deletedCount === 0) throw httpError(404, 'commission_commission_rule not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
