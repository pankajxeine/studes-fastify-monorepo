import type { SubPackageUserTiersRequest } from './types/SubPackageUserTiersRequest'
import type { SubPackageUserTiersResponse } from './types/SubPackageUserTiersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackageUserTiersController, ListItem, PaginatedResponse } from './SubPackageUserTiersController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class SubPackageUserTiersService implements SubPackageUserTiersController {
      public async listSubPackageUserTiers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubPackageUserTiersResponse[]>>> {
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
      const { count, rows } = await models.sub_package_user_tiers.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SubPackageUserTiersResponse[]>[],
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

      public async createSubPackageUserTier(app: FastifyInstance, input: SubPackageUserTiersRequest, request?: FastifyRequest): Promise<SubPackageUserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.sub_package_user_tiers.schema(schema!).create(input as any)
      return row.get({ plain: true }) as SubPackageUserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubPackageUserTiersById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageUserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_package_user_tiers.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_package_user_tiers not found')
      }
      return row.get({ plain: true }) as SubPackageUserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubPackageUserTier(app: FastifyInstance, input: SubPackageUserTiersRequest, request?: FastifyRequest): Promise<SubPackageUserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_package_user_tiers.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_package_user_tiers not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubPackageUserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubPackageUserTier(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.sub_package_user_tiers.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
