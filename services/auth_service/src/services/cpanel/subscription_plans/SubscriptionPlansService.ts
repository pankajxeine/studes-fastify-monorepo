import type { SubscriptionPlansRequest } from './types/SubscriptionPlansRequest'
import type { SubscriptionPlansResponse } from './types/SubscriptionPlansResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubscriptionPlansController, ListItem, PaginatedResponse } from './SubscriptionPlansController'

export class SubscriptionPlansService implements SubscriptionPlansController {
      public async listSubscriptionPlans(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubscriptionPlansResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.subscription_plans.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SubscriptionPlansResponse[]>[],
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

      public async createSubscriptionPlan(app: FastifyInstance, input: SubscriptionPlansRequest, request?: FastifyRequest): Promise<SubscriptionPlansResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.subscription_plans.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SubscriptionPlansResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubscriptionPlansById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionPlansResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.subscription_plans.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('subscription_plans not found')
      }
      return row.get({ plain: true }) as SubscriptionPlansResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubscriptionPlan(app: FastifyInstance, input: SubscriptionPlansRequest, request?: FastifyRequest): Promise<SubscriptionPlansResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.subscription_plans.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('subscription_plans not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubscriptionPlansResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubscriptionPlan(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.subscription_plans.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
