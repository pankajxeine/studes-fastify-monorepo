import type { UserBranchesRequest } from './types/UserBranchesRequest'
import type { UserBranchesResponse } from './types/UserBranchesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserBranchesController, ListItem, PaginatedResponse } from './UserBranchesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class UserBranchesService implements UserBranchesController {
      public async listUserBranches(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserBranchesResponse[]>>> {
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
      const { count, rows } = await models.user_branches.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserBranchesResponse[]>[],
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

      public async createUserBranche(app: FastifyInstance, input: UserBranchesRequest, request?: FastifyRequest): Promise<UserBranchesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.user_branches.schema(schema!).create(input as any)
      return row.get({ plain: true }) as UserBranchesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserBranchesById(app: FastifyInstance, request?: FastifyRequest): Promise<UserBranchesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.user_branches.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('user_branches not found')
      }
      return row.get({ plain: true }) as UserBranchesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserBranche(app: FastifyInstance, input: UserBranchesRequest, request?: FastifyRequest): Promise<UserBranchesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.user_branches.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('user_branches not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserBranchesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserBranche(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.user_branches.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
