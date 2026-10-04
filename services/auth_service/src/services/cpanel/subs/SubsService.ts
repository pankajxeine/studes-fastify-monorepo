import type { SubsRequest } from './types/SubsRequest'
import type { SubsResponse } from './types/SubsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubsController, ListItem, PaginatedResponse } from './SubsController'

export class SubsService implements SubsController {
      public async listSubs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.subs.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SubsResponse[]>[],
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

      public async createSub(app: FastifyInstance, input: SubsRequest, request?: FastifyRequest): Promise<SubsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.subs.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SubsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubsById(app: FastifyInstance, request?: FastifyRequest): Promise<SubsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.subs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('subs not found')
      }
      return row.get({ plain: true }) as SubsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSub(app: FastifyInstance, input: SubsRequest, request?: FastifyRequest): Promise<SubsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.subs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('subs not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSub(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.subs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
