import type { PackagesRequest } from './types/PackagesRequest'
import type { PackagesResponse } from './types/PackagesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackagesController, ListItem, PaginatedResponse } from './PackagesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class PackagesService implements PackagesController {
      public async listPackages(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackagesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.packages.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<PackagesResponse[]>[],
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

      public async createPackage(app: FastifyInstance, input: PackagesRequest, request?: FastifyRequest): Promise<PackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.packages.schema(schema!);
      const row = await models.packages.schema(schema!).create(input as any)
      return row.get({ plain: true }) as PackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPackagesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.packages.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('packages not found')
      }
      return row.get({ plain: true }) as PackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePackage(app: FastifyInstance, input: PackagesRequest, request?: FastifyRequest): Promise<PackagesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.packages.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('packages not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackagesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePackage(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.packages.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.packages.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
