import type { DocumentTypesRequest } from './types/DocumentTypesRequest'
import type { DocumentTypesResponse } from './types/DocumentTypesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { DocumentTypesController, ListItem, PaginatedResponse } from './DocumentTypesController'

export class DocumentTypesService implements DocumentTypesController {
      public async listDocumentTypes(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DocumentTypesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.document_types.schema(schema!)
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
      // bind model to tenant schema
      const model = app.cpanelModels.document_types.schema(schema!)
      const row = await model.create(input as any)
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
      // bind model to tenant schema
      const model = app.cpanelModels.document_types.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      // bind model to tenant schema
      const model = app.cpanelModels.document_types.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      // bind model to tenant schema
      const model = app.cpanelModels.document_types.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
