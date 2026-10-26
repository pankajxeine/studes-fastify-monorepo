import type { FeatureRequest } from './types/FeatureRequest'
import type { FeatureUpdateRequest } from './types/FeatureUpdateRequest'
import type { FeatureResponse } from './types/FeatureResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { FeatureController } from './FeatureController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class FeatureService implements FeatureController {
      public async listFeature(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FeatureResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_feature.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<FeatureResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createFeature(app: FastifyInstance, input: FeatureRequest, request?: FastifyRequest): Promise<FeatureResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_feature.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<FeatureResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getFeatureById(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_feature.schema(schema!);
      const { feature_id } = (request?.params ?? {}) as { feature_id?: string | number }
      if (feature_id === undefined || feature_id === '') throw httpError(400, 'feature_id is required')
      const row = await model.findByPk(feature_id)
      if (!row) {
        throw httpError(404, 'catalog_feature not found')
      }
      return toApiAttributes<FeatureResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateFeature(app: FastifyInstance, input: FeatureUpdateRequest, request?: FastifyRequest): Promise<FeatureResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_feature.schema(schema!);
      const { feature_id } = (request?.params ?? {}) as { feature_id?: string | number }
      if (feature_id === undefined || feature_id === '') throw httpError(400, 'feature_id is required')
      const row = await model.findByPk(feature_id)
      if (!row) {
        throw httpError(404, 'catalog_feature not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<FeatureResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteFeature(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_feature.schema(schema!);
      const { feature_id } = (request?.params ?? {}) as { feature_id?: string | number }
      if (feature_id === undefined || feature_id === '') throw httpError(400, 'feature_id is required')
      const deletedCount = await model.destroy({ where: { featureId: feature_id } })
      if (deletedCount === 0) throw httpError(404, 'catalog_feature not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
