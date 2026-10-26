import type { PermissionRequest } from './types/PermissionRequest'
import type { PermissionUpdateRequest } from './types/PermissionUpdateRequest'
import type { PermissionResponse } from './types/PermissionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PermissionController } from './PermissionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PermissionService implements PermissionController {
      public async listPermission(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PermissionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_permission.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PermissionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPermission(app: FastifyInstance, input: PermissionRequest, request?: FastifyRequest): Promise<PermissionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_permission.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PermissionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPermissionById(app: FastifyInstance, request?: FastifyRequest): Promise<PermissionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_permission.schema(schema!);
      const { permission_id } = (request?.params ?? {}) as { permission_id?: string | number }
      if (permission_id === undefined || permission_id === '') throw httpError(400, 'permission_id is required')
      const row = await model.findByPk(permission_id)
      if (!row) {
        throw httpError(404, 'iam_permission not found')
      }
      return toApiAttributes<PermissionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePermission(app: FastifyInstance, input: PermissionUpdateRequest, request?: FastifyRequest): Promise<PermissionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_permission.schema(schema!);
      const { permission_id } = (request?.params ?? {}) as { permission_id?: string | number }
      if (permission_id === undefined || permission_id === '') throw httpError(400, 'permission_id is required')
      const row = await model.findByPk(permission_id)
      if (!row) {
        throw httpError(404, 'iam_permission not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PermissionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePermission(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_permission.schema(schema!);
      const { permission_id } = (request?.params ?? {}) as { permission_id?: string | number }
      if (permission_id === undefined || permission_id === '') throw httpError(400, 'permission_id is required')
      const deletedCount = await model.destroy({ where: { permissionId: permission_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_permission not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
