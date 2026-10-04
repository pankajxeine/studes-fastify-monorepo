import type { PrimaryServiceRequestsRequest } from './types/PrimaryServiceRequestsRequest'
import type { PrimaryServiceRequestsResponse } from './types/PrimaryServiceRequestsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PrimaryServiceRequestsController, ListItem, PaginatedResponse } from './PrimaryServiceRequestsController'

export class PrimaryServiceRequestsService implements PrimaryServiceRequestsController {
      public async listPrimaryServiceRequests(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PrimaryServiceRequestsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.primary_service_requests.schema(schema!)
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
      // bind model to tenant schema
      const model = app.cpanelModels.primary_service_requests.schema(schema!)
      const row = await model.create(input as any)
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
      // bind model to tenant schema
      const model = app.cpanelModels.primary_service_requests.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      // bind model to tenant schema
      const model = app.cpanelModels.primary_service_requests.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      // bind model to tenant schema
      const model = app.cpanelModels.primary_service_requests.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
