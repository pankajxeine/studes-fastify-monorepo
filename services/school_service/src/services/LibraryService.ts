import type { LibraryBookCreateRequest } from '../openapi/types/LibraryBookCreateRequest'
import type { LibraryBook } from '../openapi/types/LibraryBook'
import type { LibraryBookList } from '../openapi/types/LibraryBookList'
import type { LibraryLoanCreateRequest } from '../openapi/types/LibraryLoanCreateRequest'
import type { LibraryLoan } from '../openapi/types/LibraryLoan'
import type { LibraryReturnRequest } from '../openapi/types/LibraryReturnRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { LibraryController } from '../openapi/controller/LibraryController'

export class LibraryService implements LibraryController {
  public async listLibraryBooks(app: FastifyInstance,request?: FastifyRequest): Promise<LibraryBookList> {
    void request
    throw new Error('Not implemented')
  }

  public async createLibraryBook(app: FastifyInstance, input: LibraryBookCreateRequest, request?: FastifyRequest): Promise<LibraryBook> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async createLibraryLoan(app: FastifyInstance, input: LibraryLoanCreateRequest, request?: FastifyRequest): Promise<LibraryLoan> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async returnLibraryBook(app: FastifyInstance, input: LibraryReturnRequest, request?: FastifyRequest): Promise<LibraryLoan> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
