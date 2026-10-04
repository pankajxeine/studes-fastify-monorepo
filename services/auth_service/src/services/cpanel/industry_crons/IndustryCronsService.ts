import type { IndustryCronsRequest } from './types/IndustryCronsRequest'
import type { IndustryCronsResponse } from './types/IndustryCronsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { IndustryCronsController, ListItem, PaginatedResponse } from './IndustryCronsController'

export class IndustryCronsService implements IndustryCronsController {
      public async listIndustryCrons(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IndustryCronsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industry_crons.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<IndustryCronsResponse[]>[],
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

      public async createIndustryCron(app: FastifyInstance, input: IndustryCronsRequest, request?: FastifyRequest): Promise<IndustryCronsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industry_crons.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as IndustryCronsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getIndustryCronsById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryCronsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industry_crons.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('industry_crons not found')
      }
      return row.get({ plain: true }) as IndustryCronsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateIndustryCron(app: FastifyInstance, input: IndustryCronsRequest, request?: FastifyRequest): Promise<IndustryCronsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industry_crons.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('industry_crons not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as IndustryCronsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteIndustryCron(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.industry_crons.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
