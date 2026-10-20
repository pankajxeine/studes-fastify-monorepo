import type { DocumentTypesRequest } from './types/DocumentTypesRequest'
import type { DocumentTypesResponse } from './types/DocumentTypesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { DocumentTypesController, ListItem, PaginatedResponse } from './DocumentTypesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class DocumentTypesService implements DocumentTypesController {
      public async listDocumentTypes(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DocumentTypesResponse[]>>> {
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
      const { count, rows } = await models.document_types.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<DocumentTypesResponse[]>[],
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

      public async createDocumentType(app: FastifyInstance, input: DocumentTypesRequest, request?: FastifyRequest): Promise<DocumentTypesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.document_types.schema(schema!).create(input as any)
      return row.get({ plain: true }) as DocumentTypesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getDocumentTypesById(app: FastifyInstance, request?: FastifyRequest): Promise<DocumentTypesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.document_types.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('document_types not found')
      }
      return row.get({ plain: true }) as DocumentTypesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateDocumentType(app: FastifyInstance, input: DocumentTypesRequest, request?: FastifyRequest): Promise<DocumentTypesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.document_types.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('document_types not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as DocumentTypesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteDocumentType(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.document_types.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
