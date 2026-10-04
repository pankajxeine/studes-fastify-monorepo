import type { CrmUserModulesRequest } from './types/CrmUserModulesRequest'
import type { CrmUserModulesResponse } from './types/CrmUserModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmUserModulesController, ListItem, PaginatedResponse } from './CrmUserModulesController'

export class CrmUserModulesService implements CrmUserModulesController {
      public async listCrmUserModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmUserModulesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_user_modules.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CrmUserModulesResponse[]>[],
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

      public async createCrmUserModule(app: FastifyInstance, input: CrmUserModulesRequest, request?: FastifyRequest): Promise<CrmUserModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_user_modules.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CrmUserModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCrmUserModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmUserModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_user_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crm_user_modules not found')
      }
      return row.get({ plain: true }) as CrmUserModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmUserModule(app: FastifyInstance, input: CrmUserModulesRequest, request?: FastifyRequest): Promise<CrmUserModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_user_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crm_user_modules not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmUserModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCrmUserModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_user_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
