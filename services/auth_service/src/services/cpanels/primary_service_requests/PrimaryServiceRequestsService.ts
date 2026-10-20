import type { PrimaryServiceRequestsRequest } from './types/PrimaryServiceRequestsRequest'
import type { PrimaryServiceRequestsResponse } from './types/PrimaryServiceRequestsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PrimaryServiceRequestsController, ListItem, PaginatedResponse } from './PrimaryServiceRequestsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class PrimaryServiceRequestsService implements PrimaryServiceRequestsController {
      public async listPrimaryServiceRequests(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PrimaryServiceRequestsResponse[]>>> {
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
      const { count, rows } = await models.primary_service_requests.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<PrimaryServiceRequestsResponse[]>[],
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

      public async createPrimaryServiceRequest(app: FastifyInstance, input: PrimaryServiceRequestsRequest, request?: FastifyRequest): Promise<PrimaryServiceRequestsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.primary_service_requests.schema(schema!).create(input as any)
      return row.get({ plain: true }) as PrimaryServiceRequestsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPrimaryServiceRequestsById(app: FastifyInstance, request?: FastifyRequest): Promise<PrimaryServiceRequestsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.primary_service_requests.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('primary_service_requests not found')
      }
      return row.get({ plain: true }) as PrimaryServiceRequestsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePrimaryServiceRequest(app: FastifyInstance, input: PrimaryServiceRequestsRequest, request?: FastifyRequest): Promise<PrimaryServiceRequestsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.primary_service_requests.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('primary_service_requests not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PrimaryServiceRequestsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePrimaryServiceRequest(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.primary_service_requests.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
