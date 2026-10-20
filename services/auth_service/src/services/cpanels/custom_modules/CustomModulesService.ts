import type { CustomModulesRequest } from './types/CustomModulesRequest'
import type { CustomModulesResponse } from './types/CustomModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomModulesController, ListItem, PaginatedResponse } from './CustomModulesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CustomModulesService implements CustomModulesController {
      public async listCustomModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomModulesResponse[]>>> {
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
      const { count, rows } = await models.custom_modules.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CustomModulesResponse[]>[],
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

      public async createCustomModule(app: FastifyInstance, input: CustomModulesRequest, request?: FastifyRequest): Promise<CustomModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.custom_modules.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CustomModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCustomModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.custom_modules.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('custom_modules not found')
      }
      return row.get({ plain: true }) as CustomModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCustomModule(app: FastifyInstance, input: CustomModulesRequest, request?: FastifyRequest): Promise<CustomModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.custom_modules.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('custom_modules not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCustomModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.custom_modules.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
