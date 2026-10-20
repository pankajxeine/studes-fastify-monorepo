import type { SubPackageFeatureBlockFieldsRequest } from './types/SubPackageFeatureBlockFieldsRequest'
import type { SubPackageFeatureBlockFieldsResponse } from './types/SubPackageFeatureBlockFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackageFeatureBlockFieldsController, ListItem, PaginatedResponse } from './SubPackageFeatureBlockFieldsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class SubPackageFeatureBlockFieldsService implements SubPackageFeatureBlockFieldsController {
      public async listSubPackageFeatureBlockFields(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubPackageFeatureBlockFieldsResponse[]>>> {
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
      const { count, rows } = await models.sub_package_feature_block_fields.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SubPackageFeatureBlockFieldsResponse[]>[],
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

      public async createSubPackageFeatureBlockField(app: FastifyInstance, input: SubPackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.sub_package_feature_block_fields.schema(schema!).create(input as any)
      return row.get({ plain: true }) as SubPackageFeatureBlockFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubPackageFeatureBlockFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_package_feature_block_fields.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_package_feature_block_fields not found')
      }
      return row.get({ plain: true }) as SubPackageFeatureBlockFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubPackageFeatureBlockField(app: FastifyInstance, input: SubPackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_package_feature_block_fields.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_package_feature_block_fields not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubPackageFeatureBlockFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubPackageFeatureBlockField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.sub_package_feature_block_fields.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
