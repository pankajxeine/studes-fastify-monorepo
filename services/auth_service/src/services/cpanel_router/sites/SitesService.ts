import type { SitesRequest } from './types/SitesRequest'
import type { SitesResponse } from './types/SitesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SitesController, ListItem, PaginatedResponse } from './SitesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class SitesService implements SitesController {
      public async listSites(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SitesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await models.sites.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SitesResponse[]>[],
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

      public async createSite(app: FastifyInstance, input: SitesRequest, request?: FastifyRequest): Promise<SitesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const row = await models.sites.schema(schema!).create(input as any)
      return row.get({ plain: true }) as SitesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSitesById(app: FastifyInstance, request?: FastifyRequest): Promise<SitesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sites.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sites not found')
      }
      return row.get({ plain: true }) as SitesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSite(app: FastifyInstance, input: SitesRequest, request?: FastifyRequest): Promise<SitesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sites.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sites not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SitesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSite(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.sites.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
