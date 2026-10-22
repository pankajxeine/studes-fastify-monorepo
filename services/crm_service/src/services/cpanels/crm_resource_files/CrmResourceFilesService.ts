import type { CrmResourceFilesRequest } from './types/CrmResourceFilesRequest'
import type { CrmResourceFilesResponse } from './types/CrmResourceFilesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmResourceFilesController, ListItem, PaginatedResponse } from './CrmResourceFilesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class CrmResourceFilesService implements CrmResourceFilesController {
      public async listCrmResourceFiles(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmResourceFilesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.crm_resource_files.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CrmResourceFilesResponse[]>[],
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

      public async createCrmResourceFile(app: FastifyInstance, input: CrmResourceFilesRequest, request?: FastifyRequest): Promise<CrmResourceFilesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.crm_resource_files.schema(schema!);
      const row = await models.crm_resource_files.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CrmResourceFilesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCrmResourceFilesById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmResourceFilesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.crm_resource_files.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crm_resource_files not found')
      }
      return row.get({ plain: true }) as CrmResourceFilesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmResourceFile(app: FastifyInstance, input: CrmResourceFilesRequest, request?: FastifyRequest): Promise<CrmResourceFilesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.crm_resource_files.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crm_resource_files not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmResourceFilesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCrmResourceFile(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.crm_resource_files.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.crm_resource_files.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
