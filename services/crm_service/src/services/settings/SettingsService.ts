import type { GlobalSettings } from './types/GlobalSettings'
import type { UpdateGlobalSettingsRequest } from './types/UpdateGlobalSettingsRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SettingsController, ListItem, PaginatedResponse } from './SettingsController'

export class SettingsService implements SettingsController {
      public async getGlobalSettings(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GlobalSettings>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateGlobalSettings(app: FastifyInstance, input: UpdateGlobalSettingsRequest, request?: FastifyRequest): Promise<GlobalSettings> {
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
