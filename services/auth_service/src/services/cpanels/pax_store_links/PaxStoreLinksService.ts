import type { PaxStoreLinksRequest } from './types/PaxStoreLinksRequest'
import type { PaxStoreLinksResponse } from './types/PaxStoreLinksResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PaxStoreLinksController, ListItem, PaginatedResponse } from './PaxStoreLinksController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class PaxStoreLinksService implements PaxStoreLinksController {
      public async listPaxStoreLinks(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PaxStoreLinksResponse[]>>> {
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
      const { count, rows } = await models.pax_store_links.schema(schema!).findAndCountAll({
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.pax_store_links.schema(schema!).create(input as any)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.pax_store_links.schema(schema!).findByPk(id)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.pax_store_links.schema(schema!).findByPk(id)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.pax_store_links.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
