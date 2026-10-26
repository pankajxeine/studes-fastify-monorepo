import type { EnvironmentRequest } from './types/EnvironmentRequest'
import type { EnvironmentUpdateRequest } from './types/EnvironmentUpdateRequest'
import type { EnvironmentResponse } from './types/EnvironmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { EnvironmentController } from './EnvironmentController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class EnvironmentService implements EnvironmentController {
      public async listEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EnvironmentResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_environment.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<EnvironmentResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createEnvironment(app: FastifyInstance, input: EnvironmentRequest, request?: FastifyRequest): Promise<EnvironmentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_environment.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<EnvironmentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getEnvironmentById(app: FastifyInstance, request?: FastifyRequest): Promise<EnvironmentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_environment.schema(schema!);
      const { environment_id } = (request?.params ?? {}) as { environment_id?: string | number }
      if (environment_id === undefined || environment_id === '') throw httpError(400, 'environment_id is required')
      const row = await model.findByPk(environment_id)
      if (!row) {
        throw httpError(404, 'platform_environment not found')
      }
      return toApiAttributes<EnvironmentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateEnvironment(app: FastifyInstance, input: EnvironmentUpdateRequest, request?: FastifyRequest): Promise<EnvironmentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_environment.schema(schema!);
      const { environment_id } = (request?.params ?? {}) as { environment_id?: string | number }
      if (environment_id === undefined || environment_id === '') throw httpError(400, 'environment_id is required')
      const row = await model.findByPk(environment_id)
      if (!row) {
        throw httpError(404, 'platform_environment not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<EnvironmentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_environment.schema(schema!);
      const { environment_id } = (request?.params ?? {}) as { environment_id?: string | number }
      if (environment_id === undefined || environment_id === '') throw httpError(400, 'environment_id is required')
      const deletedCount = await model.destroy({ where: { environmentId: environment_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_environment not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
