import type { GetCpanelRouteDomainResponse } from './types/GetCpanelRouteDomainResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CommonController, ListItem, PaginatedResponse } from './CommonController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CommonService implements CommonController {
      public async cpanelRouteDomain(app: FastifyInstance, request?: FastifyRequest): Promise<GetCpanelRouteDomainResponse> {
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
