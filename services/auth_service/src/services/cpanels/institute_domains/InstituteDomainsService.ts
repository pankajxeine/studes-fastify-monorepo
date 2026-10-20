import type { InstituteDomainsRequest } from './types/InstituteDomainsRequest'
import type { InstituteDomainsResponse } from './types/InstituteDomainsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { InstituteDomainsController, ListItem, PaginatedResponse } from './InstituteDomainsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class InstituteDomainsService implements InstituteDomainsController {
      public async listInstituteDomains(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InstituteDomainsResponse[]>>> {
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
      const { count, rows } = await models.institute_domains.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<InstituteDomainsResponse[]>[],
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

      public async createInstituteDomain(app: FastifyInstance, input: InstituteDomainsRequest, request?: FastifyRequest): Promise<InstituteDomainsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.institute_domains.schema(schema!).create(input as any)
      return row.get({ plain: true }) as InstituteDomainsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getInstituteDomainsById(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteDomainsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.institute_domains.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('institute_domains not found')
      }
      return row.get({ plain: true }) as InstituteDomainsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateInstituteDomain(app: FastifyInstance, input: InstituteDomainsRequest, request?: FastifyRequest): Promise<InstituteDomainsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.institute_domains.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('institute_domains not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as InstituteDomainsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteInstituteDomain(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.institute_domains.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
