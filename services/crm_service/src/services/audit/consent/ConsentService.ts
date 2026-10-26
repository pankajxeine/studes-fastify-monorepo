import type { ConsentRequest } from './types/ConsentRequest'
import type { ConsentUpdateRequest } from './types/ConsentUpdateRequest'
import type { ConsentResponse } from './types/ConsentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ConsentController } from './ConsentController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ConsentService implements ConsentController {
      public async listConsent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ConsentResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_consent.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ConsentResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createConsent(app: FastifyInstance, input: ConsentRequest, request?: FastifyRequest): Promise<ConsentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_consent.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ConsentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getConsentById(app: FastifyInstance, request?: FastifyRequest): Promise<ConsentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_consent.schema(schema!);
      const { consent_id } = (request?.params ?? {}) as { consent_id?: string | number }
      if (consent_id === undefined || consent_id === '') throw httpError(400, 'consent_id is required')
      const row = await model.findByPk(consent_id)
      if (!row) {
        throw httpError(404, 'audit_consent not found')
      }
      return toApiAttributes<ConsentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateConsent(app: FastifyInstance, input: ConsentUpdateRequest, request?: FastifyRequest): Promise<ConsentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_consent.schema(schema!);
      const { consent_id } = (request?.params ?? {}) as { consent_id?: string | number }
      if (consent_id === undefined || consent_id === '') throw httpError(400, 'consent_id is required')
      const row = await model.findByPk(consent_id)
      if (!row) {
        throw httpError(404, 'audit_consent not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ConsentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteConsent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_consent.schema(schema!);
      const { consent_id } = (request?.params ?? {}) as { consent_id?: string | number }
      if (consent_id === undefined || consent_id === '') throw httpError(400, 'consent_id is required')
      const deletedCount = await model.destroy({ where: { consentId: consent_id } })
      if (deletedCount === 0) throw httpError(404, 'audit_consent not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
