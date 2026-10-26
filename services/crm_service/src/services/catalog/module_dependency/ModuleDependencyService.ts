import type { ModuleDependencyRequest } from './types/ModuleDependencyRequest'
import type { ModuleDependencyUpdateRequest } from './types/ModuleDependencyUpdateRequest'
import type { ModuleDependencyResponse } from './types/ModuleDependencyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ModuleDependencyController } from './ModuleDependencyController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ModuleDependencyService implements ModuleDependencyController {
      public async listModuleDependency(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ModuleDependencyResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_module_dependency.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ModuleDependencyResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createModuleDependency(app: FastifyInstance, input: ModuleDependencyRequest, request?: FastifyRequest): Promise<ModuleDependencyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_module_dependency.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ModuleDependencyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getModuleDependencyById(app: FastifyInstance, request?: FastifyRequest): Promise<ModuleDependencyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_module_dependency.schema(schema!);
      const { module_dependency_id } = (request?.params ?? {}) as { module_dependency_id?: string | number }
      if (module_dependency_id === undefined || module_dependency_id === '') throw httpError(400, 'module_dependency_id is required')
      const row = await model.findByPk(module_dependency_id)
      if (!row) {
        throw httpError(404, 'catalog_module_dependency not found')
      }
      return toApiAttributes<ModuleDependencyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateModuleDependency(app: FastifyInstance, input: ModuleDependencyUpdateRequest, request?: FastifyRequest): Promise<ModuleDependencyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_module_dependency.schema(schema!);
      const { module_dependency_id } = (request?.params ?? {}) as { module_dependency_id?: string | number }
      if (module_dependency_id === undefined || module_dependency_id === '') throw httpError(400, 'module_dependency_id is required')
      const row = await model.findByPk(module_dependency_id)
      if (!row) {
        throw httpError(404, 'catalog_module_dependency not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ModuleDependencyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteModuleDependency(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_module_dependency.schema(schema!);
      const { module_dependency_id } = (request?.params ?? {}) as { module_dependency_id?: string | number }
      if (module_dependency_id === undefined || module_dependency_id === '') throw httpError(400, 'module_dependency_id is required')
      const deletedCount = await model.destroy({ where: { moduleDependencyId: module_dependency_id } })
      if (deletedCount === 0) throw httpError(404, 'catalog_module_dependency not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
