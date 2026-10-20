import type { PackageRoleMappingsRequest } from './types/PackageRoleMappingsRequest'
import type { PackageRoleMappingsResponse } from './types/PackageRoleMappingsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageRoleMappingsController, ListItem, PaginatedResponse } from './PackageRoleMappingsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class PackageRoleMappingsService implements PackageRoleMappingsController {
      public async listPackageRoleMappings(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageRoleMappingsResponse[]>>> {
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
      const { count, rows } = await models.package_role_mappings.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<PackageRoleMappingsResponse[]>[],
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

      public async createPackageRoleMapping(app: FastifyInstance, input: PackageRoleMappingsRequest, request?: FastifyRequest): Promise<PackageRoleMappingsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.package_role_mappings.schema(schema!).create(input as any)
      return row.get({ plain: true }) as PackageRoleMappingsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPackageRoleMappingsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleMappingsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.package_role_mappings.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('package_role_mappings not found')
      }
      return row.get({ plain: true }) as PackageRoleMappingsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePackageRoleMapping(app: FastifyInstance, input: PackageRoleMappingsRequest, request?: FastifyRequest): Promise<PackageRoleMappingsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.package_role_mappings.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('package_role_mappings not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackageRoleMappingsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePackageRoleMapping(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.package_role_mappings.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
