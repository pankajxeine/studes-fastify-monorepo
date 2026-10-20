import type { PackageFeaturesRequest } from './types/PackageFeaturesRequest'
import type { PackageFeaturesResponse } from './types/PackageFeaturesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageFeaturesController, ListItem, PaginatedResponse } from './PackageFeaturesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class PackageFeaturesService implements PackageFeaturesController {
      public async listPackageFeatures(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageFeaturesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await models.package_features.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<PackageFeaturesResponse[]>[],
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

      public async createPackageFeature(app: FastifyInstance, input: PackageFeaturesRequest, request?: FastifyRequest): Promise<PackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.package_features.schema(schema!).create(input as any)
      return row.get({ plain: true }) as PackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPackageFeaturesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.package_features.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('package_features not found')
      }
      return row.get({ plain: true }) as PackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePackageFeature(app: FastifyInstance, input: PackageFeaturesRequest, request?: FastifyRequest): Promise<PackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.package_features.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('package_features not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePackageFeature(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.package_features.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
