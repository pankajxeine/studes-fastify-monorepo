import type { KycDocumentRequest } from './types/KycDocumentRequest'
import type { KycDocumentUpdateRequest } from './types/KycDocumentUpdateRequest'
import type { KycDocumentResponse } from './types/KycDocumentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { KycDocumentController } from './KycDocumentController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class KycDocumentService implements KycDocumentController {
      public async listKycDocument(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<KycDocumentResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_kyc_document.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<KycDocumentResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createKycDocument(app: FastifyInstance, input: KycDocumentRequest, request?: FastifyRequest): Promise<KycDocumentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_kyc_document.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<KycDocumentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getKycDocumentById(app: FastifyInstance, request?: FastifyRequest): Promise<KycDocumentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_kyc_document.schema(schema!);
      const { kyc_document_id } = (request?.params ?? {}) as { kyc_document_id?: string | number }
      if (kyc_document_id === undefined || kyc_document_id === '') throw httpError(400, 'kyc_document_id is required')
      const row = await model.findByPk(kyc_document_id)
      if (!row) {
        throw httpError(404, 'onboarding_kyc_document not found')
      }
      return toApiAttributes<KycDocumentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateKycDocument(app: FastifyInstance, input: KycDocumentUpdateRequest, request?: FastifyRequest): Promise<KycDocumentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_kyc_document.schema(schema!);
      const { kyc_document_id } = (request?.params ?? {}) as { kyc_document_id?: string | number }
      if (kyc_document_id === undefined || kyc_document_id === '') throw httpError(400, 'kyc_document_id is required')
      const row = await model.findByPk(kyc_document_id)
      if (!row) {
        throw httpError(404, 'onboarding_kyc_document not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<KycDocumentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteKycDocument(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_kyc_document.schema(schema!);
      const { kyc_document_id } = (request?.params ?? {}) as { kyc_document_id?: string | number }
      if (kyc_document_id === undefined || kyc_document_id === '') throw httpError(400, 'kyc_document_id is required')
      const deletedCount = await model.destroy({ where: { kycDocumentId: kyc_document_id } })
      if (deletedCount === 0) throw httpError(404, 'onboarding_kyc_document not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
