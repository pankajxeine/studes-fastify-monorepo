import type { CpanelsRequest } from './types/CpanelsRequest'
import type { CpanelsResponse } from './types/CpanelsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CpanelsController, ListItem, PaginatedResponse } from './CpanelsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class CpanelsService implements CpanelsController {
      public async listCpanels(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CpanelsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const model = models.cpanels.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CpanelsResponse[]>[],
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

      public async createCpanel(app: FastifyInstance, input: CpanelsRequest, request?: FastifyRequest): Promise<CpanelsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const model = models.cpanels.schema(schema!);
      const row = await models.cpanels.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CpanelsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCpanelsById(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const model = models.cpanels.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('cpanels not found')
      }
      return row.get({ plain: true }) as CpanelsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCpanel(app: FastifyInstance, input: CpanelsRequest, request?: FastifyRequest): Promise<CpanelsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const model = models.cpanels.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('cpanels not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CpanelsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCpanel(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const model = models.cpanels.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.cpanels.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
