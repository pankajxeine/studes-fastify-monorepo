import type { CrmPagesRequest } from './types/CrmPagesRequest'
import type { CrmPagesResponse } from './types/CrmPagesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmPagesController, ListItem, PaginatedResponse } from './CrmPagesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CrmPagesService implements CrmPagesController {
      public async listCrmPages(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmPagesResponse[]>>> {
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
      const { count, rows } = await models.crm_pages.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CrmPagesResponse[]>[],
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

      public async createCrmPage(app: FastifyInstance, input: CrmPagesRequest, request?: FastifyRequest): Promise<CrmPagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.crm_pages.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CrmPagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCrmPagesById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmPagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.crm_pages.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('crm_pages not found')
      }
      return row.get({ plain: true }) as CrmPagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmPage(app: FastifyInstance, input: CrmPagesRequest, request?: FastifyRequest): Promise<CrmPagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.crm_pages.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('crm_pages not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmPagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCrmPage(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.crm_pages.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
