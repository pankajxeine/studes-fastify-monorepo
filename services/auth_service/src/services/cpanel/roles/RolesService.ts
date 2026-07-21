import type { RolesRequest } from './types/RolesRequest'
import type { RolesResponse } from './types/RolesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { RolesController } from './RolesController'

export class RolesService implements RolesController {
  public async listRoles(app: FastifyInstance, request?: FastifyRequest): Promise<RolesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.roles.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as RolesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createRole(app: FastifyInstance, input: RolesRequest, request?: FastifyRequest): Promise<RolesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.roles.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as RolesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getRolesById(app: FastifyInstance, request?: FastifyRequest): Promise<RolesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.roles.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('roles not found')
      }
      return row.get({ plain: true }) as RolesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateRole(app: FastifyInstance, input: RolesRequest, request?: FastifyRequest): Promise<RolesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.roles.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('roles not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as RolesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteRole(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.roles.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
