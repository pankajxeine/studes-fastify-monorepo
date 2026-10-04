import type { TimetableCreateRequest } from './types/TimetableCreateRequest'
import type { TimetableEntry } from './types/TimetableEntry'
import type { TimetableList } from './types/TimetableList'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { TimetableController, ListItem, PaginatedResponse } from './TimetableController'

export class TimetableService implements TimetableController {
      public async listTimetable(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TimetableList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createTimetableEntry(app: FastifyInstance, input: TimetableCreateRequest, request?: FastifyRequest): Promise<TimetableEntry> {
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
