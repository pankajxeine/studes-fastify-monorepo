import type { RoleModulePermissionsRequest } from './types/RoleModulePermissionsRequest'
import type { RoleModulePermissionsResponse } from './types/RoleModulePermissionsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { RoleModulePermissionsController } from './RoleModulePermissionsController'

export class RoleModulePermissionsService implements RoleModulePermissionsController {
  public async listRoleModulePermissions(app: FastifyInstance, request?: FastifyRequest): Promise<RoleModulePermissionsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_module_permissions.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as RoleModulePermissionsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createRoleModulePermission(app: FastifyInstance, input: RoleModulePermissionsRequest, request?: FastifyRequest): Promise<RoleModulePermissionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_module_permissions.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as RoleModulePermissionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getRoleModulePermissionsById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleModulePermissionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_module_permissions.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('role_module_permissions not found')
      }
      return row.get({ plain: true }) as RoleModulePermissionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateRoleModulePermission(app: FastifyInstance, input: RoleModulePermissionsRequest, request?: FastifyRequest): Promise<RoleModulePermissionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_module_permissions.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('role_module_permissions not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as RoleModulePermissionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteRoleModulePermission(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_module_permissions.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
