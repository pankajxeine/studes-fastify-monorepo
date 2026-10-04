import type { BillingHistoryRequest } from './types/BillingHistoryRequest'
import type { BillingHistoryResponse } from './types/BillingHistoryResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { BillingHistoryController, ListItem, PaginatedResponse } from './BillingHistoryController'

export class BillingHistoryService implements BillingHistoryController {
      public async listBillingHistory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BillingHistoryResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.billing_history.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<BillingHistoryResponse[]>[],
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

      public async createBillingHistory(app: FastifyInstance, input: BillingHistoryRequest, request?: FastifyRequest): Promise<BillingHistoryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.billing_history.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as BillingHistoryResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getBillingHistoryById(app: FastifyInstance, request?: FastifyRequest): Promise<BillingHistoryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.billing_history.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('billing_history not found')
      }
      return row.get({ plain: true }) as BillingHistoryResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateBillingHistory(app: FastifyInstance, input: BillingHistoryRequest, request?: FastifyRequest): Promise<BillingHistoryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.billing_history.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('billing_history not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as BillingHistoryResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteBillingHistory(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.billing_history.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
