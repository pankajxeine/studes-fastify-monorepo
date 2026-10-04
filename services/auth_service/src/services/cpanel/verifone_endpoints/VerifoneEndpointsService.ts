import type { VerifoneEndpointsRequest } from './types/VerifoneEndpointsRequest'
import type { VerifoneEndpointsResponse } from './types/VerifoneEndpointsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { VerifoneEndpointsController, ListItem, PaginatedResponse } from './VerifoneEndpointsController'

export class VerifoneEndpointsService implements VerifoneEndpointsController {
      public async listVerifoneEndpoints(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<VerifoneEndpointsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.verifone_endpoints.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<VerifoneEndpointsResponse[]>[],
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

      public async createVerifoneEndpoint(app: FastifyInstance, input: VerifoneEndpointsRequest, request?: FastifyRequest): Promise<VerifoneEndpointsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.verifone_endpoints.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as VerifoneEndpointsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getVerifoneEndpointsById(app: FastifyInstance, request?: FastifyRequest): Promise<VerifoneEndpointsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.verifone_endpoints.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('verifone_endpoints not found')
      }
      return row.get({ plain: true }) as VerifoneEndpointsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateVerifoneEndpoint(app: FastifyInstance, input: VerifoneEndpointsRequest, request?: FastifyRequest): Promise<VerifoneEndpointsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.verifone_endpoints.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('verifone_endpoints not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as VerifoneEndpointsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteVerifoneEndpoint(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.verifone_endpoints.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
