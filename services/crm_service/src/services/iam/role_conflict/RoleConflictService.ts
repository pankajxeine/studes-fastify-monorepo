import type { RoleConflictRequest } from './types/RoleConflictRequest'
import type { RoleConflictUpdateRequest } from './types/RoleConflictUpdateRequest'
import type { RoleConflictResponse } from './types/RoleConflictResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { RoleConflictController } from './RoleConflictController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class RoleConflictService implements RoleConflictController {
      public async listRoleConflict(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RoleConflictResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role_conflict.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<RoleConflictResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createRoleConflict(app: FastifyInstance, input: RoleConflictRequest, request?: FastifyRequest): Promise<RoleConflictResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role_conflict.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<RoleConflictResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getRoleConflictById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleConflictResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role_conflict.schema(schema!);
      const { role_conflict_id } = (request?.params ?? {}) as { role_conflict_id?: string | number }
      if (role_conflict_id === undefined || role_conflict_id === '') throw httpError(400, 'role_conflict_id is required')
      const row = await model.findByPk(role_conflict_id)
      if (!row) {
        throw httpError(404, 'iam_role_conflict not found')
      }
      return toApiAttributes<RoleConflictResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateRoleConflict(app: FastifyInstance, input: RoleConflictUpdateRequest, request?: FastifyRequest): Promise<RoleConflictResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role_conflict.schema(schema!);
      const { role_conflict_id } = (request?.params ?? {}) as { role_conflict_id?: string | number }
      if (role_conflict_id === undefined || role_conflict_id === '') throw httpError(400, 'role_conflict_id is required')
      const row = await model.findByPk(role_conflict_id)
      if (!row) {
        throw httpError(404, 'iam_role_conflict not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<RoleConflictResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteRoleConflict(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role_conflict.schema(schema!);
      const { role_conflict_id } = (request?.params ?? {}) as { role_conflict_id?: string | number }
      if (role_conflict_id === undefined || role_conflict_id === '') throw httpError(400, 'role_conflict_id is required')
      const deletedCount = await model.destroy({ where: { roleConflictId: role_conflict_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_role_conflict not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
