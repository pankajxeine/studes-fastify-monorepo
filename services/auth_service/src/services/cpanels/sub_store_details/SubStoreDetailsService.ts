import type { SubStoreDetailsRequest } from './types/SubStoreDetailsRequest'
import type { SubStoreDetailsResponse } from './types/SubStoreDetailsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubStoreDetailsController, ListItem, PaginatedResponse } from './SubStoreDetailsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class SubStoreDetailsService implements SubStoreDetailsController {
      public async listSubStoreDetails(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubStoreDetailsResponse[]>>> {
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
      const { count, rows } = await models.sub_store_details.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SubStoreDetailsResponse[]>[],
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

      public async createSubStoreDetail(app: FastifyInstance, input: SubStoreDetailsRequest, request?: FastifyRequest): Promise<SubStoreDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.sub_store_details.schema(schema!).create(input as any)
      return row.get({ plain: true }) as SubStoreDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubStoreDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<SubStoreDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_store_details.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_store_details not found')
      }
      return row.get({ plain: true }) as SubStoreDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubStoreDetail(app: FastifyInstance, input: SubStoreDetailsRequest, request?: FastifyRequest): Promise<SubStoreDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_store_details.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_store_details not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubStoreDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubStoreDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.sub_store_details.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
