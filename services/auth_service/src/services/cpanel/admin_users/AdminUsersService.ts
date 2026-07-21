import type { AdminUsersRequest } from './types/AdminUsersRequest'
import type { AdminUsersResponse } from './types/AdminUsersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AdminUsersController } from './AdminUsersController'

export class AdminUsersService implements AdminUsersController {
  public async listAdminUsers(app: FastifyInstance, request?: FastifyRequest): Promise<AdminUsersResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.admin_users.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as AdminUsersResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createAdminUser(app: FastifyInstance, input: AdminUsersRequest, request?: FastifyRequest): Promise<AdminUsersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.admin_users.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as AdminUsersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getAdminUsersById(app: FastifyInstance, request?: FastifyRequest): Promise<AdminUsersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.admin_users.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('admin_users not found')
      }
      return row.get({ plain: true }) as AdminUsersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateAdminUser(app: FastifyInstance, input: AdminUsersRequest, request?: FastifyRequest): Promise<AdminUsersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.admin_users.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('admin_users not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as AdminUsersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteAdminUser(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.admin_users.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
