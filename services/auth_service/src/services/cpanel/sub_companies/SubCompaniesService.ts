import type { SubCompaniesRequest } from './types/SubCompaniesRequest'
import type { SubCompaniesResponse } from './types/SubCompaniesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubCompaniesController, ListItem, PaginatedResponse } from './SubCompaniesController'

export class SubCompaniesService implements SubCompaniesController {
      public async listSubCompanies(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubCompaniesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_companies.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SubCompaniesResponse[]>[],
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

      public async createSubCompanie(app: FastifyInstance, input: SubCompaniesRequest, request?: FastifyRequest): Promise<SubCompaniesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_companies.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SubCompaniesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubCompaniesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubCompaniesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_companies.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_companies not found')
      }
      return row.get({ plain: true }) as SubCompaniesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubCompanie(app: FastifyInstance, input: SubCompaniesRequest, request?: FastifyRequest): Promise<SubCompaniesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_companies.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sub_companies not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubCompaniesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubCompanie(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sub_companies.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
