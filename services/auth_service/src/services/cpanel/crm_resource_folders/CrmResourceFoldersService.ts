import type { CrmResourceFoldersRequest } from './types/CrmResourceFoldersRequest'
import type { CrmResourceFoldersResponse } from './types/CrmResourceFoldersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmResourceFoldersController, ListItem, PaginatedResponse } from './CrmResourceFoldersController'

export class CrmResourceFoldersService implements CrmResourceFoldersController {
      public async listCrmResourceFolders(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmResourceFoldersResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_resource_folders.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CrmResourceFoldersResponse[]>[],
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

      public async createCrmResourceFolder(app: FastifyInstance, input: CrmResourceFoldersRequest, request?: FastifyRequest): Promise<CrmResourceFoldersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_resource_folders.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CrmResourceFoldersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCrmResourceFoldersById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmResourceFoldersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_resource_folders.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crm_resource_folders not found')
      }
      return row.get({ plain: true }) as CrmResourceFoldersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmResourceFolder(app: FastifyInstance, input: CrmResourceFoldersRequest, request?: FastifyRequest): Promise<CrmResourceFoldersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_resource_folders.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('crm_resource_folders not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmResourceFoldersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCrmResourceFolder(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.crm_resource_folders.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
