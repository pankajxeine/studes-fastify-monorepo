import type { PlacementDriveEligibilityRequest } from './types/PlacementDriveEligibilityRequest'
import type { PlacementDriveEligibilityUpdateRequest } from './types/PlacementDriveEligibilityUpdateRequest'
import type { PlacementDriveEligibilityResponse } from './types/PlacementDriveEligibilityResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PlacementDriveEligibilityController } from './PlacementDriveEligibilityController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PlacementDriveEligibilityService implements PlacementDriveEligibilityController {
      public async listPlacementDriveEligibility(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlacementDriveEligibilityResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.prtn_placement_drive_eligibility.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PlacementDriveEligibilityResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPlacementDriveEligibility(app: FastifyInstance, input: PlacementDriveEligibilityRequest, request?: FastifyRequest): Promise<PlacementDriveEligibilityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.prtn_placement_drive_eligibility.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PlacementDriveEligibilityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPlacementDriveEligibilityById(app: FastifyInstance, request?: FastifyRequest): Promise<PlacementDriveEligibilityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.prtn_placement_drive_eligibility.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const row = await model.findByPk(id)
      if (!row) {
        throw httpError(404, 'prtn_placement_drive_eligibility not found')
      }
      return toApiAttributes<PlacementDriveEligibilityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePlacementDriveEligibility(app: FastifyInstance, input: PlacementDriveEligibilityUpdateRequest, request?: FastifyRequest): Promise<PlacementDriveEligibilityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.prtn_placement_drive_eligibility.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const row = await model.findByPk(id)
      if (!row) {
        throw httpError(404, 'prtn_placement_drive_eligibility not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PlacementDriveEligibilityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePlacementDriveEligibility(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.prtn_placement_drive_eligibility.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const deletedCount = await model.destroy({ where: { id } })
      if (deletedCount === 0) throw httpError(404, 'prtn_placement_drive_eligibility not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
