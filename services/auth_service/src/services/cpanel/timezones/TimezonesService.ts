import type { TimezonesRequest } from './types/TimezonesRequest'
import type { TimezonesResponse } from './types/TimezonesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { TimezonesController, ListItem, PaginatedResponse } from './TimezonesController'

export class TimezonesService implements TimezonesController {
      public async listTimezones(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TimezonesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.timezones.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<TimezonesResponse[]>[],
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

      public async createTimezone(app: FastifyInstance, input: TimezonesRequest, request?: FastifyRequest): Promise<TimezonesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.timezones.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as TimezonesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTimezonesById(app: FastifyInstance, request?: FastifyRequest): Promise<TimezonesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.timezones.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('timezones not found')
      }
      return row.get({ plain: true }) as TimezonesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTimezone(app: FastifyInstance, input: TimezonesRequest, request?: FastifyRequest): Promise<TimezonesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.timezones.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('timezones not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as TimezonesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTimezone(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.timezones.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
