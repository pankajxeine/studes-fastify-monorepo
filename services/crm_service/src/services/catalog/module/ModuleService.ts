import type { ModuleRequest } from './types/ModuleRequest'
import type { ModuleUpdateRequest } from './types/ModuleUpdateRequest'
import type { ModuleResponse } from './types/ModuleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ModuleController } from './ModuleController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ModuleService implements ModuleController {
      public async listModule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ModuleResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_module.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ModuleResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createModule(app: FastifyInstance, input: ModuleRequest, request?: FastifyRequest): Promise<ModuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_module.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ModuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getModuleById(app: FastifyInstance, request?: FastifyRequest): Promise<ModuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_module.schema(schema!);
      const { module_id } = (request?.params ?? {}) as { module_id?: string | number }
      if (module_id === undefined || module_id === '') throw httpError(400, 'module_id is required')
      const row = await model.findByPk(module_id)
      if (!row) {
        throw httpError(404, 'catalog_module not found')
      }
      return toApiAttributes<ModuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateModule(app: FastifyInstance, input: ModuleUpdateRequest, request?: FastifyRequest): Promise<ModuleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_module.schema(schema!);
      const { module_id } = (request?.params ?? {}) as { module_id?: string | number }
      if (module_id === undefined || module_id === '') throw httpError(400, 'module_id is required')
      const row = await model.findByPk(module_id)
      if (!row) {
        throw httpError(404, 'catalog_module not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ModuleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_module.schema(schema!);
      const { module_id } = (request?.params ?? {}) as { module_id?: string | number }
      if (module_id === undefined || module_id === '') throw httpError(400, 'module_id is required')
      const deletedCount = await model.destroy({ where: { moduleId: module_id } })
      if (deletedCount === 0) throw httpError(404, 'catalog_module not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
