import type { ModuleBlocksRequest } from './types/ModuleBlocksRequest'
import type { ModuleBlocksResponse } from './types/ModuleBlocksResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ModuleBlocksController, ListItem, PaginatedResponse } from './ModuleBlocksController'

export class ModuleBlocksService implements ModuleBlocksController {
      public async listModuleBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ModuleBlocksResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.module_blocks.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<ModuleBlocksResponse[]>[],
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

      public async createModuleBlock(app: FastifyInstance, input: ModuleBlocksRequest, request?: FastifyRequest): Promise<ModuleBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.module_blocks.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as ModuleBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getModuleBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<ModuleBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.module_blocks.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('module_blocks not found')
      }
      return row.get({ plain: true }) as ModuleBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateModuleBlock(app: FastifyInstance, input: ModuleBlocksRequest, request?: FastifyRequest): Promise<ModuleBlocksResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.module_blocks.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('module_blocks not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as ModuleBlocksResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteModuleBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.module_blocks.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
