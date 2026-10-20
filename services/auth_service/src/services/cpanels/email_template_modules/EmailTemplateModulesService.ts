import type { EmailTemplateModulesRequest } from './types/EmailTemplateModulesRequest'
import type { EmailTemplateModulesResponse } from './types/EmailTemplateModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EmailTemplateModulesController, ListItem, PaginatedResponse } from './EmailTemplateModulesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class EmailTemplateModulesService implements EmailTemplateModulesController {
      public async listEmailTemplateModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EmailTemplateModulesResponse[]>>> {
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
      const { count, rows } = await models.email_template_modules.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<EmailTemplateModulesResponse[]>[],
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

      public async createEmailTemplateModule(app: FastifyInstance, input: EmailTemplateModulesRequest, request?: FastifyRequest): Promise<EmailTemplateModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.email_template_modules.schema(schema!).create(input as any)
      return row.get({ plain: true }) as EmailTemplateModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getEmailTemplateModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.email_template_modules.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('email_template_modules not found')
      }
      return row.get({ plain: true }) as EmailTemplateModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateEmailTemplateModule(app: FastifyInstance, input: EmailTemplateModulesRequest, request?: FastifyRequest): Promise<EmailTemplateModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.email_template_modules.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('email_template_modules not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as EmailTemplateModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteEmailTemplateModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.email_template_modules.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
