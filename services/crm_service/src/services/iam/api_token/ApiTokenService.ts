import type { ApiTokenRequest } from './types/ApiTokenRequest'
import type { ApiTokenUpdateRequest } from './types/ApiTokenUpdateRequest'
import type { ApiTokenResponse } from './types/ApiTokenResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ApiTokenController } from './ApiTokenController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ApiTokenService implements ApiTokenController {
      public async listApiToken(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApiTokenResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_api_token.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ApiTokenResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createApiToken(app: FastifyInstance, input: ApiTokenRequest, request?: FastifyRequest): Promise<ApiTokenResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_api_token.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ApiTokenResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getApiTokenById(app: FastifyInstance, request?: FastifyRequest): Promise<ApiTokenResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_api_token.schema(schema!);
      const { api_token_id } = (request?.params ?? {}) as { api_token_id?: string | number }
      if (api_token_id === undefined || api_token_id === '') throw httpError(400, 'api_token_id is required')
      const row = await model.findByPk(api_token_id)
      if (!row) {
        throw httpError(404, 'iam_api_token not found')
      }
      return toApiAttributes<ApiTokenResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateApiToken(app: FastifyInstance, input: ApiTokenUpdateRequest, request?: FastifyRequest): Promise<ApiTokenResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_api_token.schema(schema!);
      const { api_token_id } = (request?.params ?? {}) as { api_token_id?: string | number }
      if (api_token_id === undefined || api_token_id === '') throw httpError(400, 'api_token_id is required')
      const row = await model.findByPk(api_token_id)
      if (!row) {
        throw httpError(404, 'iam_api_token not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ApiTokenResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteApiToken(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.iam_api_token.schema(schema!);
      const { api_token_id } = (request?.params ?? {}) as { api_token_id?: string | number }
      if (api_token_id === undefined || api_token_id === '') throw httpError(400, 'api_token_id is required')
      const deletedCount = await model.destroy({ where: { apiTokenId: api_token_id } })
      if (deletedCount === 0) throw httpError(404, 'iam_api_token not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
