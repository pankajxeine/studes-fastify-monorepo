import type { IdempotencyKeyRequest } from './types/IdempotencyKeyRequest'
import type { IdempotencyKeyUpdateRequest } from './types/IdempotencyKeyUpdateRequest'
import type { IdempotencyKeyResponse } from './types/IdempotencyKeyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { IdempotencyKeyController } from './IdempotencyKeyController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class IdempotencyKeyService implements IdempotencyKeyController {
      public async listIdempotencyKey(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IdempotencyKeyResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_idempotency_key.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<IdempotencyKeyResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createIdempotencyKey(app: FastifyInstance, input: IdempotencyKeyRequest, request?: FastifyRequest): Promise<IdempotencyKeyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_idempotency_key.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<IdempotencyKeyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getIdempotencyKeyById(app: FastifyInstance, request?: FastifyRequest): Promise<IdempotencyKeyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_idempotency_key.schema(schema!);
      const { idempotency_key_id } = (request?.params ?? {}) as { idempotency_key_id?: string | number }
      if (idempotency_key_id === undefined || idempotency_key_id === '') throw httpError(400, 'idempotency_key_id is required')
      const row = await model.findByPk(idempotency_key_id)
      if (!row) {
        throw httpError(404, 'integration_idempotency_key not found')
      }
      return toApiAttributes<IdempotencyKeyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateIdempotencyKey(app: FastifyInstance, input: IdempotencyKeyUpdateRequest, request?: FastifyRequest): Promise<IdempotencyKeyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_idempotency_key.schema(schema!);
      const { idempotency_key_id } = (request?.params ?? {}) as { idempotency_key_id?: string | number }
      if (idempotency_key_id === undefined || idempotency_key_id === '') throw httpError(400, 'idempotency_key_id is required')
      const row = await model.findByPk(idempotency_key_id)
      if (!row) {
        throw httpError(404, 'integration_idempotency_key not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<IdempotencyKeyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteIdempotencyKey(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_idempotency_key.schema(schema!);
      const { idempotency_key_id } = (request?.params ?? {}) as { idempotency_key_id?: string | number }
      if (idempotency_key_id === undefined || idempotency_key_id === '') throw httpError(400, 'idempotency_key_id is required')
      const deletedCount = await model.destroy({ where: { idempotencyKeyId: idempotency_key_id } })
      if (deletedCount === 0) throw httpError(404, 'integration_idempotency_key not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
