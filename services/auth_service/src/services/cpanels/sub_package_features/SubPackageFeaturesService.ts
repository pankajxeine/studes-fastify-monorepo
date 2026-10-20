import type { SubPackageFeaturesRequest } from './types/SubPackageFeaturesRequest'
import type { SubPackageFeaturesResponse } from './types/SubPackageFeaturesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackageFeaturesController, ListItem, PaginatedResponse } from './SubPackageFeaturesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class SubPackageFeaturesService implements SubPackageFeaturesController {
      public async listSubPackageFeatures(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubPackageFeaturesResponse[]>>> {
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
      const { count, rows } = await models.sub_package_features.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SubPackageFeaturesResponse[]>[],
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

      public async createSubPackageFeature(app: FastifyInstance, input: SubPackageFeaturesRequest, request?: FastifyRequest): Promise<SubPackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.sub_package_features.schema(schema!).create(input as any)
      return row.get({ plain: true }) as SubPackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubPackageFeaturesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_package_features.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_package_features not found')
      }
      return row.get({ plain: true }) as SubPackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubPackageFeature(app: FastifyInstance, input: SubPackageFeaturesRequest, request?: FastifyRequest): Promise<SubPackageFeaturesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_package_features.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_package_features not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubPackageFeaturesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubPackageFeature(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.sub_package_features.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
