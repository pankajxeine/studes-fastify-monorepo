import type { SubPackagesRequest } from './types/SubPackagesRequest'
import type { SubPackagesResponse } from './types/SubPackagesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackagesController, ListItem, PaginatedResponse } from './SubPackagesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class SubPackagesService implements SubPackagesController {
      public async listSubPackages(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubPackagesResponse[]>>> {
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
      const { count, rows } = await models.sub_packages.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SubPackagesResponse[]>[],
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

      public async createSubPackage(app: FastifyInstance, input: SubPackagesRequest, request?: FastifyRequest): Promise<SubPackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.sub_packages.schema(schema!).create(input as any)
      return row.get({ plain: true }) as SubPackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubPackagesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_packages.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_packages not found')
      }
      return row.get({ plain: true }) as SubPackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubPackage(app: FastifyInstance, input: SubPackagesRequest, request?: FastifyRequest): Promise<SubPackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.sub_packages.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('sub_packages not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SubPackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubPackage(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.sub_packages.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
