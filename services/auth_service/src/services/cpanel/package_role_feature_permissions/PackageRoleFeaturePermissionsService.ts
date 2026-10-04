import type { PackageRoleFeaturePermissionsRequest } from './types/PackageRoleFeaturePermissionsRequest'
import type { PackageRoleFeaturePermissionsResponse } from './types/PackageRoleFeaturePermissionsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageRoleFeaturePermissionsController, ListItem, PaginatedResponse } from './PackageRoleFeaturePermissionsController'

export class PackageRoleFeaturePermissionsService implements PackageRoleFeaturePermissionsController {
      public async listPackageRoleFeaturePermissions(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageRoleFeaturePermissionsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_role_feature_permissions.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<PackageRoleFeaturePermissionsResponse[]>[],
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

      public async createPackageRoleFeaturePermission(app: FastifyInstance, input: PackageRoleFeaturePermissionsRequest, request?: FastifyRequest): Promise<PackageRoleFeaturePermissionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_role_feature_permissions.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as PackageRoleFeaturePermissionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPackageRoleFeaturePermissionsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleFeaturePermissionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_role_feature_permissions.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('package_role_feature_permissions not found')
      }
      return row.get({ plain: true }) as PackageRoleFeaturePermissionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePackageRoleFeaturePermission(app: FastifyInstance, input: PackageRoleFeaturePermissionsRequest, request?: FastifyRequest): Promise<PackageRoleFeaturePermissionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_role_feature_permissions.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('package_role_feature_permissions not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackageRoleFeaturePermissionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePackageRoleFeaturePermission(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_role_feature_permissions.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
