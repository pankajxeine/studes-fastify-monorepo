import type { MasterPasswordsRequest } from './types/MasterPasswordsRequest'
import type { MasterPasswordsResponse } from './types/MasterPasswordsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { MasterPasswordsController, ListItem, PaginatedResponse } from './MasterPasswordsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class MasterPasswordsService implements MasterPasswordsController {
      public async listMasterPasswords(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MasterPasswordsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await models.master_passwords.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<MasterPasswordsResponse[]>[],
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

      public async createMasterPassword(app: FastifyInstance, input: MasterPasswordsRequest, request?: FastifyRequest): Promise<MasterPasswordsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const row = await models.master_passwords.schema(schema!).create(input as any)
      return row.get({ plain: true }) as MasterPasswordsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getMasterPasswordsById(app: FastifyInstance, request?: FastifyRequest): Promise<MasterPasswordsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.master_passwords.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('master_passwords not found')
      }
      return row.get({ plain: true }) as MasterPasswordsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateMasterPassword(app: FastifyInstance, input: MasterPasswordsRequest, request?: FastifyRequest): Promise<MasterPasswordsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.master_passwords.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('master_passwords not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as MasterPasswordsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteMasterPassword(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelRouterModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.master_passwords.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
