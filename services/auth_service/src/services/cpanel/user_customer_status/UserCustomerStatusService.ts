import type { UserCustomerStatusRequest } from './types/UserCustomerStatusRequest'
import type { UserCustomerStatusResponse } from './types/UserCustomerStatusResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserCustomerStatusController, ListItem, PaginatedResponse } from './UserCustomerStatusController'

export class UserCustomerStatusService implements UserCustomerStatusController {
      public async listUserCustomerStatus(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserCustomerStatusResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_customer_status.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserCustomerStatusResponse[]>[],
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

      public async createUserCustomerStatu(app: FastifyInstance, input: UserCustomerStatusRequest, request?: FastifyRequest): Promise<UserCustomerStatusResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_customer_status.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as UserCustomerStatusResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserCustomerStatusById(app: FastifyInstance, request?: FastifyRequest): Promise<UserCustomerStatusResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_customer_status.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_customer_status not found')
      }
      return row.get({ plain: true }) as UserCustomerStatusResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserCustomerStatu(app: FastifyInstance, input: UserCustomerStatusRequest, request?: FastifyRequest): Promise<UserCustomerStatusResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_customer_status.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_customer_status not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserCustomerStatusResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserCustomerStatu(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_customer_status.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
