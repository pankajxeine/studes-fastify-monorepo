import type { EmailTemplateFieldsRequest } from './types/EmailTemplateFieldsRequest'
import type { EmailTemplateFieldsResponse } from './types/EmailTemplateFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EmailTemplateFieldsController } from './EmailTemplateFieldsController'

export class EmailTemplateFieldsService implements EmailTemplateFieldsController {
  public async listEmailTemplateFields(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.email_template_fields.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as EmailTemplateFieldsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createEmailTemplateField(app: FastifyInstance, input: EmailTemplateFieldsRequest, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.email_template_fields.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as EmailTemplateFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getEmailTemplateFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.email_template_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('email_template_fields not found')
      }
      return row.get({ plain: true }) as EmailTemplateFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateEmailTemplateField(app: FastifyInstance, input: EmailTemplateFieldsRequest, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.email_template_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('email_template_fields not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as EmailTemplateFieldsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteEmailTemplateField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.email_template_fields.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
