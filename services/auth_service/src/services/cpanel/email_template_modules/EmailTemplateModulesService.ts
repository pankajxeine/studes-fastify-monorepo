import type { EmailTemplateModulesRequest } from './types/EmailTemplateModulesRequest'
import type { EmailTemplateModulesResponse } from './types/EmailTemplateModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EmailTemplateModulesController } from './EmailTemplateModulesController'

export class EmailTemplateModulesService implements EmailTemplateModulesController {
  public async listEmailTemplateModules(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateModulesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.email_template_modules.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as EmailTemplateModulesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createEmailTemplateModule(app: FastifyInstance, input: EmailTemplateModulesRequest, request?: FastifyRequest): Promise<EmailTemplateModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.email_template_modules.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as EmailTemplateModulesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getEmailTemplateModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateModulesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.email_template_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.email_template_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.email_template_modules.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
