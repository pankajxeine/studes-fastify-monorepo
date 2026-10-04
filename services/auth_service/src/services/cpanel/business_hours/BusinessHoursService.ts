import type { BusinessHoursRequest } from './types/BusinessHoursRequest'
import type { BusinessHoursResponse } from './types/BusinessHoursResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { BusinessHoursController, ListItem, PaginatedResponse } from './BusinessHoursController'

export class BusinessHoursService implements BusinessHoursController {
      public async listBusinessHours(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BusinessHoursResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.business_hours.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<BusinessHoursResponse[]>[],
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

      public async createBusinessHour(app: FastifyInstance, input: BusinessHoursRequest, request?: FastifyRequest): Promise<BusinessHoursResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.business_hours.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as BusinessHoursResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getBusinessHoursById(app: FastifyInstance, request?: FastifyRequest): Promise<BusinessHoursResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.business_hours.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('business_hours not found')
      }
      return row.get({ plain: true }) as BusinessHoursResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateBusinessHour(app: FastifyInstance, input: BusinessHoursRequest, request?: FastifyRequest): Promise<BusinessHoursResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.business_hours.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('business_hours not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as BusinessHoursResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteBusinessHour(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.business_hours.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
