import type { PaxStoreLinksRequest } from './types/PaxStoreLinksRequest'
import type { PaxStoreLinksResponse } from './types/PaxStoreLinksResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PaxStoreLinksController, ListItem, PaginatedResponse } from './PaxStoreLinksController'

export class PaxStoreLinksService implements PaxStoreLinksController {
      public async listPaxStoreLinks(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PaxStoreLinksResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.pax_store_links.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<PaxStoreLinksResponse[]>[],
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

      public async createPaxStoreLink(app: FastifyInstance, input: PaxStoreLinksRequest, request?: FastifyRequest): Promise<PaxStoreLinksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.pax_store_links.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as PaxStoreLinksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPaxStoreLinksById(app: FastifyInstance, request?: FastifyRequest): Promise<PaxStoreLinksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.pax_store_links.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('pax_store_links not found')
      }
      return row.get({ plain: true }) as PaxStoreLinksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePaxStoreLink(app: FastifyInstance, input: PaxStoreLinksRequest, request?: FastifyRequest): Promise<PaxStoreLinksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.pax_store_links.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('pax_store_links not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PaxStoreLinksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePaxStoreLink(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.pax_store_links.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
