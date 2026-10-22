import type { MigrationDetailsRequest } from './types/MigrationDetailsRequest'
import type { MigrationDetailsResponse } from './types/MigrationDetailsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { MigrationDetailsController, ListItem, PaginatedResponse } from './MigrationDetailsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class MigrationDetailsService implements MigrationDetailsController {
      public async listMigrationDetails(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MigrationDetailsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const model = models.migration_details.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<MigrationDetailsResponse[]>[],
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

      public async createMigrationDetail(app: FastifyInstance, input: MigrationDetailsRequest, request?: FastifyRequest): Promise<MigrationDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const model = models.migration_details.schema(schema!);
      const row = await models.migration_details.schema(schema!).create(input as any)
      return row.get({ plain: true }) as MigrationDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getMigrationDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<MigrationDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const model = models.migration_details.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('migration_details not found')
      }
      return row.get({ plain: true }) as MigrationDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateMigrationDetail(app: FastifyInstance, input: MigrationDetailsRequest, request?: FastifyRequest): Promise<MigrationDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const model = models.migration_details.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('migration_details not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as MigrationDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteMigrationDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const model = models.migration_details.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.migration_details.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
