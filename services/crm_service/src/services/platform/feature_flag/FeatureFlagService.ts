import type { FeatureFlagRequest } from './types/FeatureFlagRequest'
import type { FeatureFlagUpdateRequest } from './types/FeatureFlagUpdateRequest'
import type { FeatureFlagResponse } from './types/FeatureFlagResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { FeatureFlagController } from './FeatureFlagController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class FeatureFlagService implements FeatureFlagController {
      public async listFeatureFlag(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FeatureFlagResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_feature_flag.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<FeatureFlagResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createFeatureFlag(app: FastifyInstance, input: FeatureFlagRequest, request?: FastifyRequest): Promise<FeatureFlagResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_feature_flag.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<FeatureFlagResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getFeatureFlagById(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureFlagResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_feature_flag.schema(schema!);
      const { feature_flag_id } = (request?.params ?? {}) as { feature_flag_id?: string | number }
      if (feature_flag_id === undefined || feature_flag_id === '') throw httpError(400, 'feature_flag_id is required')
      const row = await model.findByPk(feature_flag_id)
      if (!row) {
        throw httpError(404, 'platform_feature_flag not found')
      }
      return toApiAttributes<FeatureFlagResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateFeatureFlag(app: FastifyInstance, input: FeatureFlagUpdateRequest, request?: FastifyRequest): Promise<FeatureFlagResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_feature_flag.schema(schema!);
      const { feature_flag_id } = (request?.params ?? {}) as { feature_flag_id?: string | number }
      if (feature_flag_id === undefined || feature_flag_id === '') throw httpError(400, 'feature_flag_id is required')
      const row = await model.findByPk(feature_flag_id)
      if (!row) {
        throw httpError(404, 'platform_feature_flag not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<FeatureFlagResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteFeatureFlag(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_feature_flag.schema(schema!);
      const { feature_flag_id } = (request?.params ?? {}) as { feature_flag_id?: string | number }
      if (feature_flag_id === undefined || feature_flag_id === '') throw httpError(400, 'feature_flag_id is required')
      const deletedCount = await model.destroy({ where: { featureFlagId: feature_flag_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_feature_flag not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
