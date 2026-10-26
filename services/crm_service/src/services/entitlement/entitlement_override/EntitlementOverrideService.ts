import type { EntitlementOverrideRequest } from './types/EntitlementOverrideRequest'
import type { EntitlementOverrideUpdateRequest } from './types/EntitlementOverrideUpdateRequest'
import type { EntitlementOverrideResponse } from './types/EntitlementOverrideResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { EntitlementOverrideController } from './EntitlementOverrideController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class EntitlementOverrideService implements EntitlementOverrideController {
      public async listEntitlementOverride(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EntitlementOverrideResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.entitlement_entitlement_override.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<EntitlementOverrideResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createEntitlementOverride(app: FastifyInstance, input: EntitlementOverrideRequest, request?: FastifyRequest): Promise<EntitlementOverrideResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.entitlement_entitlement_override.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<EntitlementOverrideResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getEntitlementOverrideById(app: FastifyInstance, request?: FastifyRequest): Promise<EntitlementOverrideResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.entitlement_entitlement_override.schema(schema!);
      const { override_id } = (request?.params ?? {}) as { override_id?: string | number }
      if (override_id === undefined || override_id === '') throw httpError(400, 'override_id is required')
      const row = await model.findByPk(override_id)
      if (!row) {
        throw httpError(404, 'entitlement_entitlement_override not found')
      }
      return toApiAttributes<EntitlementOverrideResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateEntitlementOverride(app: FastifyInstance, input: EntitlementOverrideUpdateRequest, request?: FastifyRequest): Promise<EntitlementOverrideResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.entitlement_entitlement_override.schema(schema!);
      const { override_id } = (request?.params ?? {}) as { override_id?: string | number }
      if (override_id === undefined || override_id === '') throw httpError(400, 'override_id is required')
      const row = await model.findByPk(override_id)
      if (!row) {
        throw httpError(404, 'entitlement_entitlement_override not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<EntitlementOverrideResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteEntitlementOverride(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.entitlement_entitlement_override.schema(schema!);
      const { override_id } = (request?.params ?? {}) as { override_id?: string | number }
      if (override_id === undefined || override_id === '') throw httpError(400, 'override_id is required')
      const deletedCount = await model.destroy({ where: { overrideId: override_id } })
      if (deletedCount === 0) throw httpError(404, 'entitlement_entitlement_override not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
