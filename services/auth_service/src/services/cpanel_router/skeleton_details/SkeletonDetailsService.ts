import type { SkeletonDetailsRequest } from './types/SkeletonDetailsRequest'
import type { SkeletonDetailsResponse } from './types/SkeletonDetailsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SkeletonDetailsController, ListItem, PaginatedResponse } from './SkeletonDetailsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class SkeletonDetailsService implements SkeletonDetailsController {
      public async listSkeletonDetails(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SkeletonDetailsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await models.skeleton_details.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SkeletonDetailsResponse[]>[],
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

      public async createSkeletonDetail(app: FastifyInstance, input: SkeletonDetailsRequest, request?: FastifyRequest): Promise<SkeletonDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const row = await models.skeleton_details.schema(schema!).create(input as any)
      return row.get({ plain: true }) as SkeletonDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSkeletonDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<SkeletonDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.skeleton_details.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('skeleton_details not found')
      }
      return row.get({ plain: true }) as SkeletonDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSkeletonDetail(app: FastifyInstance, input: SkeletonDetailsRequest, request?: FastifyRequest): Promise<SkeletonDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.skeleton_details.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('skeleton_details not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SkeletonDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSkeletonDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.skeleton_details.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
