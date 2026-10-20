import type { PackageDiscountsRequest } from './types/PackageDiscountsRequest'
import type { PackageDiscountsResponse } from './types/PackageDiscountsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageDiscountsController, ListItem, PaginatedResponse } from './PackageDiscountsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class PackageDiscountsService implements PackageDiscountsController {
      public async listPackageDiscounts(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageDiscountsResponse[]>>> {
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
      const { count, rows } = await models.package_discounts.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<PackageDiscountsResponse[]>[],
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

      public async createPackageDiscount(app: FastifyInstance, input: PackageDiscountsRequest, request?: FastifyRequest): Promise<PackageDiscountsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.package_discounts.schema(schema!).create(input as any)
      return row.get({ plain: true }) as PackageDiscountsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPackageDiscountsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageDiscountsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.package_discounts.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('package_discounts not found')
      }
      return row.get({ plain: true }) as PackageDiscountsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePackageDiscount(app: FastifyInstance, input: PackageDiscountsRequest, request?: FastifyRequest): Promise<PackageDiscountsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.package_discounts.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('package_discounts not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackageDiscountsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePackageDiscount(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.package_discounts.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
