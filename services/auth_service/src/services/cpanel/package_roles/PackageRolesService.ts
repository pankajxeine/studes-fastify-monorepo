import type { PackageRolesRequest } from './types/PackageRolesRequest'
import type { PackageRolesResponse } from './types/PackageRolesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageRolesController } from './PackageRolesController'

export class PackageRolesService implements PackageRolesController {
  public async listPackageRoles(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRolesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_roles.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as PackageRolesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createPackageRole(app: FastifyInstance, input: PackageRolesRequest, request?: FastifyRequest): Promise<PackageRolesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_roles.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as PackageRolesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getPackageRolesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRolesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_roles.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('package_roles not found')
      }
      return row.get({ plain: true }) as PackageRolesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updatePackageRole(app: FastifyInstance, input: PackageRolesRequest, request?: FastifyRequest): Promise<PackageRolesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_roles.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('package_roles not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as PackageRolesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deletePackageRole(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.package_roles.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
