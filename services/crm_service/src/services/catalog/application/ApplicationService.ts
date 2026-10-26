import type { ApplicationRequest } from './types/ApplicationRequest'
import type { ApplicationUpdateRequest } from './types/ApplicationUpdateRequest'
import type { ApplicationResponse } from './types/ApplicationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ApplicationController } from './ApplicationController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ApplicationService implements ApplicationController {
      public async listApplication(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApplicationResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_application.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ApplicationResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createApplication(app: FastifyInstance, input: ApplicationRequest, request?: FastifyRequest): Promise<ApplicationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_application.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ApplicationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getApplicationById(app: FastifyInstance, request?: FastifyRequest): Promise<ApplicationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_application.schema(schema!);
      const { application_id } = (request?.params ?? {}) as { application_id?: string | number }
      if (application_id === undefined || application_id === '') throw httpError(400, 'application_id is required')
      const row = await model.findByPk(application_id)
      if (!row) {
        throw httpError(404, 'catalog_application not found')
      }
      return toApiAttributes<ApplicationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateApplication(app: FastifyInstance, input: ApplicationUpdateRequest, request?: FastifyRequest): Promise<ApplicationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_application.schema(schema!);
      const { application_id } = (request?.params ?? {}) as { application_id?: string | number }
      if (application_id === undefined || application_id === '') throw httpError(400, 'application_id is required')
      const row = await model.findByPk(application_id)
      if (!row) {
        throw httpError(404, 'catalog_application not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ApplicationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteApplication(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.catalog_application.schema(schema!);
      const { application_id } = (request?.params ?? {}) as { application_id?: string | number }
      if (application_id === undefined || application_id === '') throw httpError(400, 'application_id is required')
      const deletedCount = await model.destroy({ where: { applicationId: application_id } })
      if (deletedCount === 0) throw httpError(404, 'catalog_application not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
