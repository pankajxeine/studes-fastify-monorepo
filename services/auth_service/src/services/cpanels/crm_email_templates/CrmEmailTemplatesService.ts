import type { CrmEmailTemplatesRequest } from './types/CrmEmailTemplatesRequest'
import type { CrmEmailTemplatesResponse } from './types/CrmEmailTemplatesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmEmailTemplatesController, ListItem, PaginatedResponse } from './CrmEmailTemplatesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CrmEmailTemplatesService implements CrmEmailTemplatesController {
      public async listCrmEmailTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmEmailTemplatesResponse[]>>> {
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
      const { count, rows } = await models.crm_email_templates.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CrmEmailTemplatesResponse[]>[],
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

      public async createCrmEmailTemplate(app: FastifyInstance, input: CrmEmailTemplatesRequest, request?: FastifyRequest): Promise<CrmEmailTemplatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.crm_email_templates.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CrmEmailTemplatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCrmEmailTemplatesById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmEmailTemplatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.crm_email_templates.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('crm_email_templates not found')
      }
      return row.get({ plain: true }) as CrmEmailTemplatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmEmailTemplate(app: FastifyInstance, input: CrmEmailTemplatesRequest, request?: FastifyRequest): Promise<CrmEmailTemplatesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.crm_email_templates.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('crm_email_templates not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CrmEmailTemplatesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCrmEmailTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.crm_email_templates.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
