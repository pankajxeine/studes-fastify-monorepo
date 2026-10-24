import type { SubstitutionRequest } from './types/SubstitutionRequest'
import type { SubstitutionUpdateRequest } from './types/SubstitutionUpdateRequest'
import type { SubstitutionResponse } from './types/SubstitutionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubstitutionController } from './SubstitutionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SubstitutionService implements SubstitutionController {
      public async listSubstitution(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubstitutionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.ttbl_substitution.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SubstitutionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSubstitution(app: FastifyInstance, input: SubstitutionRequest, request?: FastifyRequest): Promise<SubstitutionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.ttbl_substitution.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SubstitutionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubstitutionById(app: FastifyInstance, request?: FastifyRequest): Promise<SubstitutionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.ttbl_substitution.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const row = await model.findByPk(id)
      if (!row) {
        throw httpError(404, 'ttbl_substitution not found')
      }
      return toApiAttributes<SubstitutionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubstitution(app: FastifyInstance, input: SubstitutionUpdateRequest, request?: FastifyRequest): Promise<SubstitutionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.ttbl_substitution.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const row = await model.findByPk(id)
      if (!row) {
        throw httpError(404, 'ttbl_substitution not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SubstitutionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubstitution(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.ttbl_substitution.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      if (id === undefined || id === '') throw httpError(400, 'id is required')
      const deletedCount = await model.destroy({ where: { id } })
      if (deletedCount === 0) throw httpError(404, 'ttbl_substitution not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
