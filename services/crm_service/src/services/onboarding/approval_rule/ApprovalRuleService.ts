import type { ApprovalRuleRequest } from './types/ApprovalRuleRequest'
import type { ApprovalRuleUpdateRequest } from './types/ApprovalRuleUpdateRequest'
import type { ApprovalRuleResponse } from './types/ApprovalRuleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ApprovalRuleController } from './ApprovalRuleController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ApprovalRuleService implements ApprovalRuleController {
      public async listApprovalRule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApprovalRuleResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_approval_rule.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ApprovalRuleResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createApprovalRule(app: FastifyInstance, input: ApprovalRuleRequest, request?: FastifyRequest): Promise<ApprovalRuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_approval_rule.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ApprovalRuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getApprovalRuleById(app: FastifyInstance, request?: FastifyRequest): Promise<ApprovalRuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_approval_rule.schema(schema!);
      const { approval_rule_id } = (request?.params ?? {}) as { approval_rule_id?: string | number }
      if (approval_rule_id === undefined || approval_rule_id === '') throw httpError(400, 'approval_rule_id is required')
      const row = await model.findByPk(approval_rule_id)
      if (!row) {
        throw httpError(404, 'onboarding_approval_rule not found')
      }
      return toApiAttributes<ApprovalRuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateApprovalRule(app: FastifyInstance, input: ApprovalRuleUpdateRequest, request?: FastifyRequest): Promise<ApprovalRuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_approval_rule.schema(schema!);
      const { approval_rule_id } = (request?.params ?? {}) as { approval_rule_id?: string | number }
      if (approval_rule_id === undefined || approval_rule_id === '') throw httpError(400, 'approval_rule_id is required')
      const row = await model.findByPk(approval_rule_id)
      if (!row) {
        throw httpError(404, 'onboarding_approval_rule not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ApprovalRuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteApprovalRule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_approval_rule.schema(schema!);
      const { approval_rule_id } = (request?.params ?? {}) as { approval_rule_id?: string | number }
      if (approval_rule_id === undefined || approval_rule_id === '') throw httpError(400, 'approval_rule_id is required')
      const deletedCount = await model.destroy({ where: { approvalRuleId: approval_rule_id } })
      if (deletedCount === 0) throw httpError(404, 'onboarding_approval_rule not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
