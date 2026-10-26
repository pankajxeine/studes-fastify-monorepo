import type { UserRoleRequest } from './types/UserRoleRequest'
import type { UserRoleUpdateRequest } from './types/UserRoleUpdateRequest'
import type { UserRoleResponse } from './types/UserRoleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserRoleController } from './UserRoleController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class UserRoleService implements UserRoleController {
      public async listUserRole(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserRoleResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_user_role.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<UserRoleResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createUserRole(app: FastifyInstance, input: UserRoleRequest, request?: FastifyRequest): Promise<UserRoleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_user_role.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<UserRoleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserRoleById(app: FastifyInstance, request?: FastifyRequest): Promise<UserRoleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_user_role.schema(schema!);
      const { user_role_id } = (request?.params ?? {}) as { user_role_id?: string | number }
      if (user_role_id === undefined || user_role_id === '') throw httpError(400, 'user_role_id is required')
      const row = await model.findByPk(user_role_id)
      if (!row) {
        throw httpError(404, 'iam_user_role not found')
      }
      return toApiAttributes<UserRoleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserRole(app: FastifyInstance, input: UserRoleUpdateRequest, request?: FastifyRequest): Promise<UserRoleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_user_role.schema(schema!);
      const { user_role_id } = (request?.params ?? {}) as { user_role_id?: string | number }
      if (user_role_id === undefined || user_role_id === '') throw httpError(400, 'user_role_id is required')
      const row = await model.findByPk(user_role_id)
      if (!row) {
        throw httpError(404, 'iam_user_role not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<UserRoleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserRole(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_user_role.schema(schema!);
      const { user_role_id } = (request?.params ?? {}) as { user_role_id?: string | number }
      if (user_role_id === undefined || user_role_id === '') throw httpError(400, 'user_role_id is required')
      const deletedCount = await model.destroy({ where: { userRoleId: user_role_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_user_role not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
