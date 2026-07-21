import type { RoleTemplateModulesRequest } from './types/RoleTemplateModulesRequest'
import type { RoleTemplateModulesResponse } from './types/RoleTemplateModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { RoleTemplateModulesController } from './RoleTemplateModulesController'

export class RoleTemplateModulesService implements RoleTemplateModulesController {
  public async listRoleTemplateModules(app: FastifyInstance, request?: FastifyRequest): Promise<RoleTemplateModulesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_template_modules.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as RoleTemplateModulesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createRoleTemplateModule(app: FastifyInstance, input: RoleTemplateModulesRequest, request?: FastifyRequest): Promise<RoleTemplateModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_template_modules.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as RoleTemplateModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getRoleTemplateModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleTemplateModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_template_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('role_template_modules not found')
      }
      return row.get({ plain: true }) as RoleTemplateModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateRoleTemplateModule(app: FastifyInstance, input: RoleTemplateModulesRequest, request?: FastifyRequest): Promise<RoleTemplateModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_template_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('role_template_modules not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as RoleTemplateModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteRoleTemplateModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_template_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
