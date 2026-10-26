import type { TerritoryRequest } from './types/TerritoryRequest'
import type { TerritoryUpdateRequest } from './types/TerritoryUpdateRequest'
import type { TerritoryResponse } from './types/TerritoryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TerritoryController } from './TerritoryController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TerritoryService implements TerritoryController {
      public async listTerritory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TerritoryResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_territory.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TerritoryResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTerritory(app: FastifyInstance, input: TerritoryRequest, request?: FastifyRequest): Promise<TerritoryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_territory.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TerritoryResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTerritoryById(app: FastifyInstance, request?: FastifyRequest): Promise<TerritoryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_territory.schema(schema!);
      const { territory_id } = (request?.params ?? {}) as { territory_id?: string | number }
      if (territory_id === undefined || territory_id === '') throw httpError(400, 'territory_id is required')
      const row = await model.findByPk(territory_id)
      if (!row) {
        throw httpError(404, 'org_territory not found')
      }
      return toApiAttributes<TerritoryResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTerritory(app: FastifyInstance, input: TerritoryUpdateRequest, request?: FastifyRequest): Promise<TerritoryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_territory.schema(schema!);
      const { territory_id } = (request?.params ?? {}) as { territory_id?: string | number }
      if (territory_id === undefined || territory_id === '') throw httpError(400, 'territory_id is required')
      const row = await model.findByPk(territory_id)
      if (!row) {
        throw httpError(404, 'org_territory not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TerritoryResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTerritory(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_territory.schema(schema!);
      const { territory_id } = (request?.params ?? {}) as { territory_id?: string | number }
      if (territory_id === undefined || territory_id === '') throw httpError(400, 'territory_id is required')
      const deletedCount = await model.destroy({ where: { territoryId: territory_id } })
      if (deletedCount === 0) throw httpError(404, 'org_territory not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
