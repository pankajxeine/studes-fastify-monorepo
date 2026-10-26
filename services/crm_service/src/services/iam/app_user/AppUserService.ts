import type { AppUserRequest } from './types/AppUserRequest'
import type { AppUserUpdateRequest } from './types/AppUserUpdateRequest'
import type { AppUserResponse } from './types/AppUserResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AppUserController } from './AppUserController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class AppUserService implements AppUserController {
      public async listAppUser(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AppUserResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_app_user.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<AppUserResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createAppUser(app: FastifyInstance, input: AppUserRequest, request?: FastifyRequest): Promise<AppUserResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_app_user.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<AppUserResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAppUserById(app: FastifyInstance, request?: FastifyRequest): Promise<AppUserResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_app_user.schema(schema!);
      const { app_user_id } = (request?.params ?? {}) as { app_user_id?: string | number }
      if (app_user_id === undefined || app_user_id === '') throw httpError(400, 'app_user_id is required')
      const row = await model.findByPk(app_user_id)
      if (!row) {
        throw httpError(404, 'iam_app_user not found')
      }
      return toApiAttributes<AppUserResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAppUser(app: FastifyInstance, input: AppUserUpdateRequest, request?: FastifyRequest): Promise<AppUserResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_app_user.schema(schema!);
      const { app_user_id } = (request?.params ?? {}) as { app_user_id?: string | number }
      if (app_user_id === undefined || app_user_id === '') throw httpError(400, 'app_user_id is required')
      const row = await model.findByPk(app_user_id)
      if (!row) {
        throw httpError(404, 'iam_app_user not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<AppUserResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAppUser(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_app_user.schema(schema!);
      const { app_user_id } = (request?.params ?? {}) as { app_user_id?: string | number }
      if (app_user_id === undefined || app_user_id === '') throw httpError(400, 'app_user_id is required')
      const deletedCount = await model.destroy({ where: { appUserId: app_user_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_app_user not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
