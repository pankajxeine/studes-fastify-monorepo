import type { ModulesRequest } from './types/ModulesRequest'
import type { ModulesResponse } from './types/ModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ModulesController, ListItem, PaginatedResponse } from './ModulesController'

export class ModulesService implements ModulesController {
      public async listModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ModulesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.modules.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<ModulesResponse[]>[],
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

      public async createModule(app: FastifyInstance, input: ModulesRequest, request?: FastifyRequest): Promise<ModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.modules.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as ModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<ModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('modules not found')
      }
      return row.get({ plain: true }) as ModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateModule(app: FastifyInstance, input: ModulesRequest, request?: FastifyRequest): Promise<ModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('modules not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as ModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
