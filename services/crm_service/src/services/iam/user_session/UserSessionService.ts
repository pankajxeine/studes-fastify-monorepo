import type { UserSessionRequest } from './types/UserSessionRequest'
import type { UserSessionUpdateRequest } from './types/UserSessionUpdateRequest'
import type { UserSessionResponse } from './types/UserSessionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserSessionController } from './UserSessionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class UserSessionService implements UserSessionController {
      public async listUserSession(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserSessionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_user_session.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<UserSessionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createUserSession(app: FastifyInstance, input: UserSessionRequest, request?: FastifyRequest): Promise<UserSessionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_user_session.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<UserSessionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserSessionById(app: FastifyInstance, request?: FastifyRequest): Promise<UserSessionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_user_session.schema(schema!);
      const { user_session_id } = (request?.params ?? {}) as { user_session_id?: string | number }
      if (user_session_id === undefined || user_session_id === '') throw httpError(400, 'user_session_id is required')
      const row = await model.findByPk(user_session_id)
      if (!row) {
        throw httpError(404, 'iam_user_session not found')
      }
      return toApiAttributes<UserSessionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserSession(app: FastifyInstance, input: UserSessionUpdateRequest, request?: FastifyRequest): Promise<UserSessionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_user_session.schema(schema!);
      const { user_session_id } = (request?.params ?? {}) as { user_session_id?: string | number }
      if (user_session_id === undefined || user_session_id === '') throw httpError(400, 'user_session_id is required')
      const row = await model.findByPk(user_session_id)
      if (!row) {
        throw httpError(404, 'iam_user_session not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<UserSessionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserSession(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_user_session.schema(schema!);
      const { user_session_id } = (request?.params ?? {}) as { user_session_id?: string | number }
      if (user_session_id === undefined || user_session_id === '') throw httpError(400, 'user_session_id is required')
      const deletedCount = await model.destroy({ where: { userSessionId: user_session_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_user_session not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
