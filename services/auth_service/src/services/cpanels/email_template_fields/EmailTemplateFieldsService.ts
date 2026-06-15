import type { EmailTemplateFieldsRequest } from './types/EmailTemplateFieldsRequest'
import type { EmailTemplateFieldsResponse } from './types/EmailTemplateFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EmailTemplateFieldsController } from './EmailTemplateFieldsController'

export class EmailTemplateFieldsService implements EmailTemplateFieldsController {
  public async listEmailTemplateFields(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createEmailTemplateField(app: FastifyInstance, input: EmailTemplateFieldsRequest, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse> {
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

  public async getEmailTemplateFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateEmailTemplateField(app: FastifyInstance, input: EmailTemplateFieldsRequest, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse> {
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

  public async deleteEmailTemplateField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
