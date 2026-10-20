import type { PackageUserTiersRequest } from './types/PackageUserTiersRequest'
import type { PackageUserTiersResponse } from './types/PackageUserTiersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageUserTiersController, ListItem, PaginatedResponse } from './PackageUserTiersController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class PackageUserTiersService implements PackageUserTiersController {
      public async listPackageUserTiers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageUserTiersResponse[]>>> {
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
      const { count, rows } = await models.package_user_tiers.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<PackageUserTiersResponse[]>[],
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

      public async createPackageUserTier(app: FastifyInstance, input: PackageUserTiersRequest, request?: FastifyRequest): Promise<PackageUserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.package_user_tiers.schema(schema!).create(input as any)
      return row.get({ plain: true }) as PackageUserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPackageUserTiersById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageUserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.package_user_tiers.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('package_user_tiers not found')
      }
      return row.get({ plain: true }) as PackageUserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePackageUserTier(app: FastifyInstance, input: PackageUserTiersRequest, request?: FastifyRequest): Promise<PackageUserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.package_user_tiers.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('package_user_tiers not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackageUserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePackageUserTier(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.package_user_tiers.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
