import type { RolePermissionRequest } from './types/RolePermissionRequest'
import type { RolePermissionUpdateRequest } from './types/RolePermissionUpdateRequest'
import type { RolePermissionResponse } from './types/RolePermissionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { RolePermissionController } from './RolePermissionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class RolePermissionService implements RolePermissionController {
      public async listRolePermission(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RolePermissionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role_permission.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<RolePermissionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createRolePermission(app: FastifyInstance, input: RolePermissionRequest, request?: FastifyRequest): Promise<RolePermissionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role_permission.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<RolePermissionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getRolePermissionById(app: FastifyInstance, request?: FastifyRequest): Promise<RolePermissionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role_permission.schema(schema!);
      const { role_permission_id } = (request?.params ?? {}) as { role_permission_id?: string | number }
      if (role_permission_id === undefined || role_permission_id === '') throw httpError(400, 'role_permission_id is required')
      const row = await model.findByPk(role_permission_id)
      if (!row) {
        throw httpError(404, 'iam_role_permission not found')
      }
      return toApiAttributes<RolePermissionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateRolePermission(app: FastifyInstance, input: RolePermissionUpdateRequest, request?: FastifyRequest): Promise<RolePermissionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role_permission.schema(schema!);
      const { role_permission_id } = (request?.params ?? {}) as { role_permission_id?: string | number }
      if (role_permission_id === undefined || role_permission_id === '') throw httpError(400, 'role_permission_id is required')
      const row = await model.findByPk(role_permission_id)
      if (!row) {
        throw httpError(404, 'iam_role_permission not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<RolePermissionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteRolePermission(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_role_permission.schema(schema!);
      const { role_permission_id } = (request?.params ?? {}) as { role_permission_id?: string | number }
      if (role_permission_id === undefined || role_permission_id === '') throw httpError(400, 'role_permission_id is required')
      const deletedCount = await model.destroy({ where: { rolePermissionId: role_permission_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_role_permission not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
