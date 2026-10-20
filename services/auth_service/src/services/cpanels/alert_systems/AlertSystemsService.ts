import type { AlertSystemsRequest } from './types/AlertSystemsRequest'
import type { AlertSystemsResponse } from './types/AlertSystemsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AlertSystemsController, ListItem, PaginatedResponse } from './AlertSystemsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class AlertSystemsService implements AlertSystemsController {
      public async listAlertSystems(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AlertSystemsResponse[]>>> {
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
      const { count, rows } = await models.alert_systems.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<AlertSystemsResponse[]>[],
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

      public async createAlertSystem(app: FastifyInstance, input: AlertSystemsRequest, request?: FastifyRequest): Promise<AlertSystemsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.alert_systems.schema(schema!).create(input as any)
      return row.get({ plain: true }) as AlertSystemsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAlertSystemsById(app: FastifyInstance, request?: FastifyRequest): Promise<AlertSystemsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.alert_systems.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('alert_systems not found')
      }
      return row.get({ plain: true }) as AlertSystemsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAlertSystem(app: FastifyInstance, input: AlertSystemsRequest, request?: FastifyRequest): Promise<AlertSystemsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.alert_systems.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('alert_systems not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as AlertSystemsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAlertSystem(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.alert_systems.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
