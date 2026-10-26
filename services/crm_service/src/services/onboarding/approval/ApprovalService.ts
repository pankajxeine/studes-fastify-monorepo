import type { ApprovalRequest } from './types/ApprovalRequest'
import type { ApprovalUpdateRequest } from './types/ApprovalUpdateRequest'
import type { ApprovalResponse } from './types/ApprovalResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ApprovalController } from './ApprovalController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ApprovalService implements ApprovalController {
      public async listApproval(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApprovalResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_approval.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ApprovalResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createApproval(app: FastifyInstance, input: ApprovalRequest, request?: FastifyRequest): Promise<ApprovalResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_approval.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ApprovalResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getApprovalById(app: FastifyInstance, request?: FastifyRequest): Promise<ApprovalResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_approval.schema(schema!);
      const { approval_id } = (request?.params ?? {}) as { approval_id?: string | number }
      if (approval_id === undefined || approval_id === '') throw httpError(400, 'approval_id is required')
      const row = await model.findByPk(approval_id)
      if (!row) {
        throw httpError(404, 'onboarding_approval not found')
      }
      return toApiAttributes<ApprovalResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateApproval(app: FastifyInstance, input: ApprovalUpdateRequest, request?: FastifyRequest): Promise<ApprovalResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_approval.schema(schema!);
      const { approval_id } = (request?.params ?? {}) as { approval_id?: string | number }
      if (approval_id === undefined || approval_id === '') throw httpError(400, 'approval_id is required')
      const row = await model.findByPk(approval_id)
      if (!row) {
        throw httpError(404, 'onboarding_approval not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ApprovalResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteApproval(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_approval.schema(schema!);
      const { approval_id } = (request?.params ?? {}) as { approval_id?: string | number }
      if (approval_id === undefined || approval_id === '') throw httpError(400, 'approval_id is required')
      const deletedCount = await model.destroy({ where: { approvalId: approval_id } })
      if (deletedCount === 0) throw httpError(404, 'onboarding_approval not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
