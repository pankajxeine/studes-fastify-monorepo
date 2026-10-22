import type { CpanelModulesRequest } from './types/CpanelModulesRequest'
import type { CpanelModulesResponse } from './types/CpanelModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CpanelModulesController, ListItem, PaginatedResponse } from './CpanelModulesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class CpanelModulesService implements CpanelModulesController {
      public async listCpanelModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CpanelModulesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.cpanel_modules.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CpanelModulesResponse[]>[],
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

      public async createCpanelModule(app: FastifyInstance, input: CpanelModulesRequest, request?: FastifyRequest): Promise<CpanelModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.cpanel_modules.schema(schema!);
      const row = await models.cpanel_modules.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CpanelModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCpanelModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.cpanel_modules.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('cpanel_modules not found')
      }
      return row.get({ plain: true }) as CpanelModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCpanelModule(app: FastifyInstance, input: CpanelModulesRequest, request?: FastifyRequest): Promise<CpanelModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.cpanel_modules.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('cpanel_modules not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CpanelModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCpanelModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.cpanel_modules.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.cpanel_modules.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
