import type { LegalEntityRequest } from './types/LegalEntityRequest'
import type { LegalEntityUpdateRequest } from './types/LegalEntityUpdateRequest'
import type { LegalEntityResponse } from './types/LegalEntityResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { LegalEntityController } from './LegalEntityController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class LegalEntityService implements LegalEntityController {
      public async listLegalEntity(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LegalEntityResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_legal_entity.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<LegalEntityResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createLegalEntity(app: FastifyInstance, input: LegalEntityRequest, request?: FastifyRequest): Promise<LegalEntityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_legal_entity.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<LegalEntityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getLegalEntityById(app: FastifyInstance, request?: FastifyRequest): Promise<LegalEntityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_legal_entity.schema(schema!);
      const { legal_entity_id } = (request?.params ?? {}) as { legal_entity_id?: string | number }
      if (legal_entity_id === undefined || legal_entity_id === '') throw httpError(400, 'legal_entity_id is required')
      const row = await model.findByPk(legal_entity_id)
      if (!row) {
        throw httpError(404, 'org_legal_entity not found')
      }
      return toApiAttributes<LegalEntityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateLegalEntity(app: FastifyInstance, input: LegalEntityUpdateRequest, request?: FastifyRequest): Promise<LegalEntityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_legal_entity.schema(schema!);
      const { legal_entity_id } = (request?.params ?? {}) as { legal_entity_id?: string | number }
      if (legal_entity_id === undefined || legal_entity_id === '') throw httpError(400, 'legal_entity_id is required')
      const row = await model.findByPk(legal_entity_id)
      if (!row) {
        throw httpError(404, 'org_legal_entity not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<LegalEntityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteLegalEntity(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_legal_entity.schema(schema!);
      const { legal_entity_id } = (request?.params ?? {}) as { legal_entity_id?: string | number }
      if (legal_entity_id === undefined || legal_entity_id === '') throw httpError(400, 'legal_entity_id is required')
      const deletedCount = await model.destroy({ where: { legalEntityId: legal_entity_id } })
      if (deletedCount === 0) throw httpError(404, 'org_legal_entity not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
