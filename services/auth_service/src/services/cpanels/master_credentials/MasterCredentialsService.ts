import type { MasterCredentialsRequest } from './types/MasterCredentialsRequest'
import type { MasterCredentialsResponse } from './types/MasterCredentialsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { MasterCredentialsController, ListItem, PaginatedResponse } from './MasterCredentialsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class MasterCredentialsService implements MasterCredentialsController {
      public async listMasterCredentials(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MasterCredentialsResponse[]>>> {
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
      const { count, rows } = await models.master_credentials.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<MasterCredentialsResponse[]>[],
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

      public async createMasterCredential(app: FastifyInstance, input: MasterCredentialsRequest, request?: FastifyRequest): Promise<MasterCredentialsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.master_credentials.schema(schema!).create(input as any)
      return row.get({ plain: true }) as MasterCredentialsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getMasterCredentialsById(app: FastifyInstance, request?: FastifyRequest): Promise<MasterCredentialsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.master_credentials.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('master_credentials not found')
      }
      return row.get({ plain: true }) as MasterCredentialsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateMasterCredential(app: FastifyInstance, input: MasterCredentialsRequest, request?: FastifyRequest): Promise<MasterCredentialsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.master_credentials.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('master_credentials not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as MasterCredentialsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteMasterCredential(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.master_credentials.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
