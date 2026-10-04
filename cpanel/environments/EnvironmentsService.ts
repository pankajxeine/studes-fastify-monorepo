import type { EnvironmentsRequest } from './types/EnvironmentsRequest'
import type { EnvironmentsResponse } from './types/EnvironmentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EnvironmentsController, ListItem, PaginatedResponse } from './EnvironmentsController'

export class EnvironmentsService implements EnvironmentsController {
      public async listEnvironments(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EnvironmentsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.environments.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<EnvironmentsResponse[]>[],
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

      public async createEnvironment(app: FastifyInstance, input: EnvironmentsRequest, request?: FastifyRequest): Promise<EnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.environments.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as EnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getEnvironmentsById(app: FastifyInstance, request?: FastifyRequest): Promise<EnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.environments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('environments not found')
      }
      return row.get({ plain: true }) as EnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateEnvironment(app: FastifyInstance, input: EnvironmentsRequest, request?: FastifyRequest): Promise<EnvironmentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.environments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('environments not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as EnvironmentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.environments.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
