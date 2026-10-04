import type { EmailTemplate } from './types/EmailTemplate'
import type { CreateEmailTemplateRequest } from './types/CreateEmailTemplateRequest'
import type { UpdateEmailTemplateRequest } from './types/UpdateEmailTemplateRequest'
import type { EmailTemplateListResponse } from './types/EmailTemplateListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EmailTemplatesController, ListItem, PaginatedResponse } from './EmailTemplatesController'

export class EmailTemplatesService implements EmailTemplatesController {
      public async listEmailTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EmailTemplateListResponse>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createEmailTemplate(app: FastifyInstance, input: CreateEmailTemplateRequest, request?: FastifyRequest): Promise<EmailTemplate> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateEmailTemplate(app: FastifyInstance, input: UpdateEmailTemplateRequest, request?: FastifyRequest): Promise<EmailTemplate> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteEmailTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
