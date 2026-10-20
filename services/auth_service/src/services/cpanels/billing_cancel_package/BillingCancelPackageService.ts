import type { BillingCancelPackageRequest } from './types/BillingCancelPackageRequest'
import type { BillingCancelPackageResponse } from './types/BillingCancelPackageResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { BillingCancelPackageController, ListItem, PaginatedResponse } from './BillingCancelPackageController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class BillingCancelPackageService implements BillingCancelPackageController {
      public async listBillingCancelPackage(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BillingCancelPackageResponse[]>>> {
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
      const { count, rows } = await models.billing_cancel_package.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<BillingCancelPackageResponse[]>[],
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

      public async createBillingCancelPackage(app: FastifyInstance, input: BillingCancelPackageRequest, request?: FastifyRequest): Promise<BillingCancelPackageResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.billing_cancel_package.schema(schema!).create(input as any)
      return row.get({ plain: true }) as BillingCancelPackageResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getBillingCancelPackageById(app: FastifyInstance, request?: FastifyRequest): Promise<BillingCancelPackageResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.billing_cancel_package.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('billing_cancel_package not found')
      }
      return row.get({ plain: true }) as BillingCancelPackageResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateBillingCancelPackage(app: FastifyInstance, input: BillingCancelPackageRequest, request?: FastifyRequest): Promise<BillingCancelPackageResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.billing_cancel_package.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('billing_cancel_package not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as BillingCancelPackageResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteBillingCancelPackage(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.billing_cancel_package.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
