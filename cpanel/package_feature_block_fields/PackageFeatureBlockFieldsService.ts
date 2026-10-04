import type { PackageFeatureBlockFieldsRequest } from './types/PackageFeatureBlockFieldsRequest'
import type { PackageFeatureBlockFieldsResponse } from './types/PackageFeatureBlockFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageFeatureBlockFieldsController, ListItem, PaginatedResponse } from './PackageFeatureBlockFieldsController'

export class PackageFeatureBlockFieldsService implements PackageFeatureBlockFieldsController {
      public async listPackageFeatureBlockFields(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageFeatureBlockFieldsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_feature_block_fields.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<PackageFeatureBlockFieldsResponse[]>[],
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

      public async createPackageFeatureBlockField(app: FastifyInstance, input: PackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<PackageFeatureBlockFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_feature_block_fields.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as PackageFeatureBlockFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPackageFeatureBlockFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeatureBlockFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_feature_block_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('package_feature_block_fields not found')
      }
      return row.get({ plain: true }) as PackageFeatureBlockFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePackageFeatureBlockField(app: FastifyInstance, input: PackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<PackageFeatureBlockFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_feature_block_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('package_feature_block_fields not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackageFeatureBlockFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePackageFeatureBlockField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_feature_block_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
