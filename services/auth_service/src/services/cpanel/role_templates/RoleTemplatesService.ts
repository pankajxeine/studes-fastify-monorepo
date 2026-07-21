import type { RoleTemplatesRequest } from './types/RoleTemplatesRequest'
import type { RoleTemplatesResponse } from './types/RoleTemplatesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { RoleTemplatesController } from './RoleTemplatesController'

export class RoleTemplatesService implements RoleTemplatesController {
  public async listRoleTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<RoleTemplatesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_templates.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as RoleTemplatesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createRoleTemplate(app: FastifyInstance, input: RoleTemplatesRequest, request?: FastifyRequest): Promise<RoleTemplatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_templates.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as RoleTemplatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getRoleTemplatesById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleTemplatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_templates.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('role_templates not found')
      }
      return row.get({ plain: true }) as RoleTemplatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateRoleTemplate(app: FastifyInstance, input: RoleTemplatesRequest, request?: FastifyRequest): Promise<RoleTemplatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_templates.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('role_templates not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as RoleTemplatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteRoleTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.role_templates.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
