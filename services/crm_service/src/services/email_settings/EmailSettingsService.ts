import type { EmailSettings } from './types/EmailSettings'
import type { UpdateEmailSettingsRequest } from './types/UpdateEmailSettingsRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EmailSettingsController, ListItem, PaginatedResponse } from './EmailSettingsController'

export class EmailSettingsService implements EmailSettingsController {
      public async getEmailSettings(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EmailSettings>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateEmailSettings(app: FastifyInstance, input: UpdateEmailSettingsRequest, request?: FastifyRequest): Promise<EmailSettings> {
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

}
