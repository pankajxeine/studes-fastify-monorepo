import type { ApiClientRequest } from './types/ApiClientRequest'
import type { ApiClientUpdateRequest } from './types/ApiClientUpdateRequest'
import type { ApiClientResponse } from './types/ApiClientResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ApiClientController } from './ApiClientController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ApiClientService implements ApiClientController {
      public async listApiClient(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApiClientResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_api_client.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ApiClientResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createApiClient(app: FastifyInstance, input: ApiClientRequest, request?: FastifyRequest): Promise<ApiClientResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_api_client.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ApiClientResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getApiClientById(app: FastifyInstance, request?: FastifyRequest): Promise<ApiClientResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_api_client.schema(schema!);
      const { api_client_id } = (request?.params ?? {}) as { api_client_id?: string | number }
      if (api_client_id === undefined || api_client_id === '') throw httpError(400, 'api_client_id is required')
      const row = await model.findByPk(api_client_id)
      if (!row) {
        throw httpError(404, 'tenancy_api_client not found')
      }
      return toApiAttributes<ApiClientResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateApiClient(app: FastifyInstance, input: ApiClientUpdateRequest, request?: FastifyRequest): Promise<ApiClientResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_api_client.schema(schema!);
      const { api_client_id } = (request?.params ?? {}) as { api_client_id?: string | number }
      if (api_client_id === undefined || api_client_id === '') throw httpError(400, 'api_client_id is required')
      const row = await model.findByPk(api_client_id)
      if (!row) {
        throw httpError(404, 'tenancy_api_client not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ApiClientResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteApiClient(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.tenancy_api_client.schema(schema!);
      const { api_client_id } = (request?.params ?? {}) as { api_client_id?: string | number }
      if (api_client_id === undefined || api_client_id === '') throw httpError(400, 'api_client_id is required')
      const deletedCount = await model.destroy({ where: { apiClientId: api_client_id } })
      if (deletedCount === 0) throw httpError(404, 'tenancy_api_client not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
