import type { BillingAddPackageRequest } from './types/BillingAddPackageRequest'
import type { BillingAddPackageResponse } from './types/BillingAddPackageResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { BillingAddPackageController, ListItem, PaginatedResponse } from './BillingAddPackageController'

export class BillingAddPackageService implements BillingAddPackageController {
      public async listBillingAddPackage(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BillingAddPackageResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.billing_add_package.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<BillingAddPackageResponse[]>[],
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

      public async createBillingAddPackage(app: FastifyInstance, input: BillingAddPackageRequest, request?: FastifyRequest): Promise<BillingAddPackageResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.billing_add_package.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as BillingAddPackageResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getBillingAddPackageById(app: FastifyInstance, request?: FastifyRequest): Promise<BillingAddPackageResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.billing_add_package.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('billing_add_package not found')
      }
      return row.get({ plain: true }) as BillingAddPackageResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateBillingAddPackage(app: FastifyInstance, input: BillingAddPackageRequest, request?: FastifyRequest): Promise<BillingAddPackageResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.billing_add_package.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('billing_add_package not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as BillingAddPackageResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteBillingAddPackage(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.billing_add_package.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
