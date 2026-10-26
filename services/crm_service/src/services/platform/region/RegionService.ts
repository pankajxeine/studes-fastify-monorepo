import type { RegionRequest } from './types/RegionRequest'
import type { RegionUpdateRequest } from './types/RegionUpdateRequest'
import type { RegionResponse } from './types/RegionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { RegionController } from './RegionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class RegionService implements RegionController {
      public async listRegion(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RegionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_region.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<RegionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createRegion(app: FastifyInstance, input: RegionRequest, request?: FastifyRequest): Promise<RegionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_region.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<RegionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getRegionById(app: FastifyInstance, request?: FastifyRequest): Promise<RegionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_region.schema(schema!);
      const { region_id } = (request?.params ?? {}) as { region_id?: string | number }
      if (region_id === undefined || region_id === '') throw httpError(400, 'region_id is required')
      const row = await model.findByPk(region_id)
      if (!row) {
        throw httpError(404, 'platform_region not found')
      }
      return toApiAttributes<RegionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateRegion(app: FastifyInstance, input: RegionUpdateRequest, request?: FastifyRequest): Promise<RegionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_region.schema(schema!);
      const { region_id } = (request?.params ?? {}) as { region_id?: string | number }
      if (region_id === undefined || region_id === '') throw httpError(400, 'region_id is required')
      const row = await model.findByPk(region_id)
      if (!row) {
        throw httpError(404, 'platform_region not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<RegionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteRegion(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_region.schema(schema!);
      const { region_id } = (request?.params ?? {}) as { region_id?: string | number }
      if (region_id === undefined || region_id === '') throw httpError(400, 'region_id is required')
      const deletedCount = await model.destroy({ where: { regionId: region_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_region not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
