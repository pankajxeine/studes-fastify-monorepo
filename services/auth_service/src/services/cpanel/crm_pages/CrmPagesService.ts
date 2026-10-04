import type { CrmPagesRequest } from './types/CrmPagesRequest'
import type { CrmPagesResponse } from './types/CrmPagesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmPagesController, ListItem, PaginatedResponse } from './CrmPagesController'

export class CrmPagesService implements CrmPagesController {
      public async listCrmPages(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmPagesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_pages.schema(schema!)
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
      // bind model to tenant schema
      const model = app.cpanelModels.crm_pages.schema(schema!)
      const row = await model.create(input as any)
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
      // bind model to tenant schema
      const model = app.cpanelModels.crm_pages.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      // bind model to tenant schema
      const model = app.cpanelModels.crm_pages.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      // bind model to tenant schema
      const model = app.cpanelModels.crm_pages.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
