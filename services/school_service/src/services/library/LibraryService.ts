import type { LibraryBookCreateRequest } from './types/LibraryBookCreateRequest'
import type { LibraryBook } from './types/LibraryBook'
import type { LibraryBookList } from './types/LibraryBookList'
import type { LibraryLoanCreateRequest } from './types/LibraryLoanCreateRequest'
import type { LibraryLoan } from './types/LibraryLoan'
import type { LibraryReturnRequest } from './types/LibraryReturnRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { LibraryController, ListItem, PaginatedResponse } from './LibraryController'

export class LibraryService implements LibraryController {
      public async listLibraryBooks(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LibraryBookList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createLibraryBook(app: FastifyInstance, input: LibraryBookCreateRequest, request?: FastifyRequest): Promise<LibraryBook> {
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

      public async createLibraryLoan(app: FastifyInstance, input: LibraryLoanCreateRequest, request?: FastifyRequest): Promise<LibraryLoan> {
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

      public async returnLibraryBook(app: FastifyInstance, input: LibraryReturnRequest, request?: FastifyRequest): Promise<LibraryLoan> {
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
