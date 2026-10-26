import type { RetentionPolicyRequest } from './types/RetentionPolicyRequest'
import type { RetentionPolicyUpdateRequest } from './types/RetentionPolicyUpdateRequest'
import type { RetentionPolicyResponse } from './types/RetentionPolicyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { RetentionPolicyController } from './RetentionPolicyController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class RetentionPolicyService implements RetentionPolicyController {
      public async listRetentionPolicy(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RetentionPolicyResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_retention_policy.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<RetentionPolicyResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createRetentionPolicy(app: FastifyInstance, input: RetentionPolicyRequest, request?: FastifyRequest): Promise<RetentionPolicyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_retention_policy.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<RetentionPolicyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getRetentionPolicyById(app: FastifyInstance, request?: FastifyRequest): Promise<RetentionPolicyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_retention_policy.schema(schema!);
      const { retention_policy_id } = (request?.params ?? {}) as { retention_policy_id?: string | number }
      if (retention_policy_id === undefined || retention_policy_id === '') throw httpError(400, 'retention_policy_id is required')
      const row = await model.findByPk(retention_policy_id)
      if (!row) {
        throw httpError(404, 'audit_retention_policy not found')
      }
      return toApiAttributes<RetentionPolicyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateRetentionPolicy(app: FastifyInstance, input: RetentionPolicyUpdateRequest, request?: FastifyRequest): Promise<RetentionPolicyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_retention_policy.schema(schema!);
      const { retention_policy_id } = (request?.params ?? {}) as { retention_policy_id?: string | number }
      if (retention_policy_id === undefined || retention_policy_id === '') throw httpError(400, 'retention_policy_id is required')
      const row = await model.findByPk(retention_policy_id)
      if (!row) {
        throw httpError(404, 'audit_retention_policy not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<RetentionPolicyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteRetentionPolicy(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_retention_policy.schema(schema!);
      const { retention_policy_id } = (request?.params ?? {}) as { retention_policy_id?: string | number }
      if (retention_policy_id === undefined || retention_policy_id === '') throw httpError(400, 'retention_policy_id is required')
      const deletedCount = await model.destroy({ where: { retentionPolicyId: retention_policy_id } })
      if (deletedCount === 0) throw httpError(404, 'audit_retention_policy not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
