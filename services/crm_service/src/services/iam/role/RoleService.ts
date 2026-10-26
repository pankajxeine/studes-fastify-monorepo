import type { RoleRequest } from './types/RoleRequest'
import type { RoleUpdateRequest } from './types/RoleUpdateRequest'
import type { RoleResponse } from './types/RoleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { RoleController } from './RoleController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class RoleService implements RoleController {
      public async listRole(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RoleResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<RoleResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createRole(app: FastifyInstance, input: RoleRequest, request?: FastifyRequest): Promise<RoleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<RoleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getRoleById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role.schema(schema!);
      const { role_id } = (request?.params ?? {}) as { role_id?: string | number }
      if (role_id === undefined || role_id === '') throw httpError(400, 'role_id is required')
      const row = await model.findByPk(role_id)
      if (!row) {
        throw httpError(404, 'iam_role not found')
      }
      return toApiAttributes<RoleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateRole(app: FastifyInstance, input: RoleUpdateRequest, request?: FastifyRequest): Promise<RoleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role.schema(schema!);
      const { role_id } = (request?.params ?? {}) as { role_id?: string | number }
      if (role_id === undefined || role_id === '') throw httpError(400, 'role_id is required')
      const row = await model.findByPk(role_id)
      if (!row) {
        throw httpError(404, 'iam_role not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<RoleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteRole(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role.schema(schema!);
      const { role_id } = (request?.params ?? {}) as { role_id?: string | number }
      if (role_id === undefined || role_id === '') throw httpError(400, 'role_id is required')
      const deletedCount = await model.destroy({ where: { roleId: role_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_role not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
