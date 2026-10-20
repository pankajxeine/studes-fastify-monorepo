import type { CrmModuleBlocksRequest } from './types/CrmModuleBlocksRequest'
import type { CrmModuleBlocksResponse } from './types/CrmModuleBlocksResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmModuleBlocksController, ListItem, PaginatedResponse } from './CrmModuleBlocksController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CrmModuleBlocksService implements CrmModuleBlocksController {
      public async listCrmModuleBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmModuleBlocksResponse[]>>> {
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
      const { count, rows } = await models.crm_module_blocks.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CrmModuleBlocksResponse[]>[],
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

      public async createCrmModuleBlock(app: FastifyInstance, input: CrmModuleBlocksRequest, request?: FastifyRequest): Promise<CrmModuleBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.crm_module_blocks.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CrmModuleBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCrmModuleBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmModuleBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.crm_module_blocks.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('crm_module_blocks not found')
      }
      return row.get({ plain: true }) as CrmModuleBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmModuleBlock(app: FastifyInstance, input: CrmModuleBlocksRequest, request?: FastifyRequest): Promise<CrmModuleBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.crm_module_blocks.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('crm_module_blocks not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmModuleBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCrmModuleBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.crm_module_blocks.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
