import type { AssetsLogsRequest } from './types/AssetsLogsRequest'
import type { AssetsLogsResponse } from './types/AssetsLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AssetsLogsController, ListItem, PaginatedResponse } from './AssetsLogsController'

export class AssetsLogsService implements AssetsLogsController {
      public async listAssetsLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AssetsLogsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.assets_logs.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<AssetsLogsResponse[]>[],
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

      public async createAssetsLog(app: FastifyInstance, input: AssetsLogsRequest, request?: FastifyRequest): Promise<AssetsLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.assets_logs.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as AssetsLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAssetsLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<AssetsLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.assets_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('assets_logs not found')
      }
      return row.get({ plain: true }) as AssetsLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAssetsLog(app: FastifyInstance, input: AssetsLogsRequest, request?: FastifyRequest): Promise<AssetsLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.assets_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('assets_logs not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as AssetsLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAssetsLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.assets_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
