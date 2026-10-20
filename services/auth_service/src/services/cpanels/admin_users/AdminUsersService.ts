import type { AdminUsersRequest } from './types/AdminUsersRequest'
import type { AdminUsersResponse } from './types/AdminUsersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AdminUsersController, ListItem, PaginatedResponse } from './AdminUsersController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class AdminUsersService implements AdminUsersController {
  public async listAdminUsers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AdminUsersResponse[]>>> {
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
      const { count, rows } = await models.admin_users.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<AdminUsersResponse[]>[],
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

  public async createAdminUser(app: FastifyInstance, input: AdminUsersRequest, request?: FastifyRequest): Promise<AdminUsersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.admin_users.schema(schema!).create(input as any)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.admin_users.schema(schema!).findByPk(id)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.admin_users.schema(schema!).findByPk(id)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.admin_users.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
