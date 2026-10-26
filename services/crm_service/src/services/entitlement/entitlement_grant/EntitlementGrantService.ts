import type { EntitlementGrantRequest } from './types/EntitlementGrantRequest'
import type { EntitlementGrantUpdateRequest } from './types/EntitlementGrantUpdateRequest'
import type { EntitlementGrantResponse } from './types/EntitlementGrantResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { EntitlementGrantController } from './EntitlementGrantController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class EntitlementGrantService implements EntitlementGrantController {
      public async listEntitlementGrant(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EntitlementGrantResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.entitlement_entitlement_grant.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<EntitlementGrantResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createEntitlementGrant(app: FastifyInstance, input: EntitlementGrantRequest, request?: FastifyRequest): Promise<EntitlementGrantResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.entitlement_entitlement_grant.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<EntitlementGrantResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getEntitlementGrantById(app: FastifyInstance, request?: FastifyRequest): Promise<EntitlementGrantResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.entitlement_entitlement_grant.schema(schema!);
      const { entitlement_grant_id } = (request?.params ?? {}) as { entitlement_grant_id?: string | number }
      if (entitlement_grant_id === undefined || entitlement_grant_id === '') throw httpError(400, 'entitlement_grant_id is required')
      const row = await model.findByPk(entitlement_grant_id)
      if (!row) {
        throw httpError(404, 'entitlement_entitlement_grant not found')
      }
      return toApiAttributes<EntitlementGrantResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateEntitlementGrant(app: FastifyInstance, input: EntitlementGrantUpdateRequest, request?: FastifyRequest): Promise<EntitlementGrantResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.entitlement_entitlement_grant.schema(schema!);
      const { entitlement_grant_id } = (request?.params ?? {}) as { entitlement_grant_id?: string | number }
      if (entitlement_grant_id === undefined || entitlement_grant_id === '') throw httpError(400, 'entitlement_grant_id is required')
      const row = await model.findByPk(entitlement_grant_id)
      if (!row) {
        throw httpError(404, 'entitlement_entitlement_grant not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<EntitlementGrantResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteEntitlementGrant(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.entitlement_entitlement_grant.schema(schema!);
      const { entitlement_grant_id } = (request?.params ?? {}) as { entitlement_grant_id?: string | number }
      if (entitlement_grant_id === undefined || entitlement_grant_id === '') throw httpError(400, 'entitlement_grant_id is required')
      const deletedCount = await model.destroy({ where: { entitlementGrantId: entitlement_grant_id } })
      if (deletedCount === 0) throw httpError(404, 'entitlement_entitlement_grant not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
