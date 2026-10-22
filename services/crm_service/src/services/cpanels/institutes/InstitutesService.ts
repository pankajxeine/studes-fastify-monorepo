import type { InstitutesRequest } from './types/InstitutesRequest'
import type { InstitutesResponse } from './types/InstitutesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { InstitutesController, ListItem, PaginatedResponse } from './InstitutesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class InstitutesService implements InstitutesController {
      public async listInstitutes(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InstitutesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.institutes.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<InstitutesResponse[]>[],
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

      public async createInstitute(app: FastifyInstance, input: InstitutesRequest, request?: FastifyRequest): Promise<InstitutesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.institutes.schema(schema!);
      const row = await models.institutes.schema(schema!).create(input as any)
      return row.get({ plain: true }) as InstitutesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getInstitutesById(app: FastifyInstance, request?: FastifyRequest): Promise<InstitutesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.institutes.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('institutes not found')
      }
      return row.get({ plain: true }) as InstitutesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateInstitute(app: FastifyInstance, input: InstitutesRequest, request?: FastifyRequest): Promise<InstitutesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.institutes.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('institutes not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as InstitutesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteInstitute(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.institutes.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.institutes.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
