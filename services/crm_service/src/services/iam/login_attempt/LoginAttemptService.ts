import type { LoginAttemptRequest } from './types/LoginAttemptRequest'
import type { LoginAttemptUpdateRequest } from './types/LoginAttemptUpdateRequest'
import type { LoginAttemptResponse } from './types/LoginAttemptResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { LoginAttemptController } from './LoginAttemptController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class LoginAttemptService implements LoginAttemptController {
      public async listLoginAttempt(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LoginAttemptResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_login_attempt.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<LoginAttemptResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createLoginAttempt(app: FastifyInstance, input: LoginAttemptRequest, request?: FastifyRequest): Promise<LoginAttemptResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_login_attempt.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<LoginAttemptResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getLoginAttemptById(app: FastifyInstance, request?: FastifyRequest): Promise<LoginAttemptResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_login_attempt.schema(schema!);
      const { login_attempt_id } = (request?.params ?? {}) as { login_attempt_id?: string | number }
      if (login_attempt_id === undefined || login_attempt_id === '') throw httpError(400, 'login_attempt_id is required')
      const row = await model.findByPk(login_attempt_id)
      if (!row) {
        throw httpError(404, 'iam_login_attempt not found')
      }
      return toApiAttributes<LoginAttemptResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateLoginAttempt(app: FastifyInstance, input: LoginAttemptUpdateRequest, request?: FastifyRequest): Promise<LoginAttemptResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_login_attempt.schema(schema!);
      const { login_attempt_id } = (request?.params ?? {}) as { login_attempt_id?: string | number }
      if (login_attempt_id === undefined || login_attempt_id === '') throw httpError(400, 'login_attempt_id is required')
      const row = await model.findByPk(login_attempt_id)
      if (!row) {
        throw httpError(404, 'iam_login_attempt not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<LoginAttemptResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteLoginAttempt(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_login_attempt.schema(schema!);
      const { login_attempt_id } = (request?.params ?? {}) as { login_attempt_id?: string | number }
      if (login_attempt_id === undefined || login_attempt_id === '') throw httpError(400, 'login_attempt_id is required')
      const deletedCount = await model.destroy({ where: { loginAttemptId: login_attempt_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_login_attempt not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
