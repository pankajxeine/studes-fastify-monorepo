import type { BranchesRequest } from './types/BranchesRequest'
import type { BranchesResponse } from './types/BranchesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { BranchesController, ListItem, PaginatedResponse } from './BranchesController'

export class BranchesService implements BranchesController {
      public async listBranches(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BranchesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.branches.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<BranchesResponse[]>[],
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

      public async createBranche(app: FastifyInstance, input: BranchesRequest, request?: FastifyRequest): Promise<BranchesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.branches.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as BranchesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getBranchesById(app: FastifyInstance, request?: FastifyRequest): Promise<BranchesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.branches.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('branches not found')
      }
      return row.get({ plain: true }) as BranchesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateBranche(app: FastifyInstance, input: BranchesRequest, request?: FastifyRequest): Promise<BranchesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.branches.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('branches not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as BranchesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteBranche(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.branches.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
