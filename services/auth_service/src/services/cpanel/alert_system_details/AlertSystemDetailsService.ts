import type { AlertSystemDetailsRequest } from './types/AlertSystemDetailsRequest'
import type { AlertSystemDetailsResponse } from './types/AlertSystemDetailsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AlertSystemDetailsController, ListItem, PaginatedResponse } from './AlertSystemDetailsController'

export class AlertSystemDetailsService implements AlertSystemDetailsController {
      public async listAlertSystemDetails(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AlertSystemDetailsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.alert_system_details.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<AlertSystemDetailsResponse[]>[],
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

      public async createAlertSystemDetail(app: FastifyInstance, input: AlertSystemDetailsRequest, request?: FastifyRequest): Promise<AlertSystemDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.alert_system_details.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as AlertSystemDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAlertSystemDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<AlertSystemDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.alert_system_details.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('alert_system_details not found')
      }
      return row.get({ plain: true }) as AlertSystemDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAlertSystemDetail(app: FastifyInstance, input: AlertSystemDetailsRequest, request?: FastifyRequest): Promise<AlertSystemDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.alert_system_details.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('alert_system_details not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as AlertSystemDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAlertSystemDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.alert_system_details.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
