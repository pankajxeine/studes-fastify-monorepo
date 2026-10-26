import type { PasswordResetTokenRequest } from './types/PasswordResetTokenRequest'
import type { PasswordResetTokenUpdateRequest } from './types/PasswordResetTokenUpdateRequest'
import type { PasswordResetTokenResponse } from './types/PasswordResetTokenResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PasswordResetTokenController } from './PasswordResetTokenController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PasswordResetTokenService implements PasswordResetTokenController {
      public async listPasswordResetToken(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PasswordResetTokenResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_password_reset_token.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PasswordResetTokenResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPasswordResetToken(app: FastifyInstance, input: PasswordResetTokenRequest, request?: FastifyRequest): Promise<PasswordResetTokenResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_password_reset_token.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PasswordResetTokenResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPasswordResetTokenById(app: FastifyInstance, request?: FastifyRequest): Promise<PasswordResetTokenResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_password_reset_token.schema(schema!);
      const { password_reset_token_id } = (request?.params ?? {}) as { password_reset_token_id?: string | number }
      if (password_reset_token_id === undefined || password_reset_token_id === '') throw httpError(400, 'password_reset_token_id is required')
      const row = await model.findByPk(password_reset_token_id)
      if (!row) {
        throw httpError(404, 'iam_password_reset_token not found')
      }
      return toApiAttributes<PasswordResetTokenResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePasswordResetToken(app: FastifyInstance, input: PasswordResetTokenUpdateRequest, request?: FastifyRequest): Promise<PasswordResetTokenResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_password_reset_token.schema(schema!);
      const { password_reset_token_id } = (request?.params ?? {}) as { password_reset_token_id?: string | number }
      if (password_reset_token_id === undefined || password_reset_token_id === '') throw httpError(400, 'password_reset_token_id is required')
      const row = await model.findByPk(password_reset_token_id)
      if (!row) {
        throw httpError(404, 'iam_password_reset_token not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PasswordResetTokenResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePasswordResetToken(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_password_reset_token.schema(schema!);
      const { password_reset_token_id } = (request?.params ?? {}) as { password_reset_token_id?: string | number }
      if (password_reset_token_id === undefined || password_reset_token_id === '') throw httpError(400, 'password_reset_token_id is required')
      const deletedCount = await model.destroy({ where: { passwordResetTokenId: password_reset_token_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_password_reset_token not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
