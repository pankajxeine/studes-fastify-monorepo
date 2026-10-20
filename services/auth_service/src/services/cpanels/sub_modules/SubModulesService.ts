import type { SubModulesRequest } from './types/SubModulesRequest'
import type { SubModulesResponse } from './types/SubModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubModulesController, ListItem, PaginatedResponse } from './SubModulesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class SubModulesService implements SubModulesController {
      public async listSubModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubModulesResponse[]>>> {
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
      const { count, rows } = await models.sub_modules.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SubModulesResponse[]>[],
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

      public async createSubModule(app: FastifyInstance, input: SubModulesRequest, request?: FastifyRequest): Promise<SubModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.sub_modules.schema(schema!).create(input as any)
      return row.get({ plain: true }) as SubModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_modules.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_modules not found')
      }
      return row.get({ plain: true }) as SubModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubModule(app: FastifyInstance, input: SubModulesRequest, request?: FastifyRequest): Promise<SubModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_modules.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_modules not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.sub_modules.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
