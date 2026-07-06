import type { PackageRoleMappingsRequest } from './types/PackageRoleMappingsRequest'
import type { PackageRoleMappingsResponse } from './types/PackageRoleMappingsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageRoleMappingsController } from './PackageRoleMappingsController'

export class PackageRoleMappingsService implements PackageRoleMappingsController {
  public async listPackageRoleMappings(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleMappingsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_role_mappings.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as PackageRoleMappingsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createPackageRoleMapping(app: FastifyInstance, input: PackageRoleMappingsRequest, request?: FastifyRequest): Promise<PackageRoleMappingsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_role_mappings.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as PackageRoleMappingsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getPackageRoleMappingsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleMappingsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_role_mappings.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_role_mappings.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_role_mappings.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
