import type { CrmCronsRequest } from './types/CrmCronsRequest'
import type { CrmCronsResponse } from './types/CrmCronsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmCronsController, ListItem, PaginatedResponse } from './CrmCronsController'

export class CrmCronsService implements CrmCronsController {
      public async listCrmCrons(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmCronsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_crons.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CrmCronsResponse[]>[],
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

      public async createCrmCron(app: FastifyInstance, input: CrmCronsRequest, request?: FastifyRequest): Promise<CrmCronsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_crons.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CrmCronsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCrmCronsById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmCronsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_crons.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crm_crons not found')
      }
      return row.get({ plain: true }) as CrmCronsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmCron(app: FastifyInstance, input: CrmCronsRequest, request?: FastifyRequest): Promise<CrmCronsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_crons.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crm_crons not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmCronsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCrmCron(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_crons.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
