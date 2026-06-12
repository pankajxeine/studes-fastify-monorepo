import type { LibraryBookCreateRequest } from '../types/LibraryBookCreateRequest'
import type { LibraryBook } from '../types/LibraryBook'
import type { LibraryBookList } from '../types/LibraryBookList'
import type { LibraryLoanCreateRequest } from '../types/LibraryLoanCreateRequest'
import type { LibraryLoan } from '../types/LibraryLoan'
import type { LibraryReturnRequest } from '../types/LibraryReturnRequest'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface LibraryController {
  listLibraryBooks(app: FastifyInstance, request?: FastifyRequest): Promise<LibraryBookList>
  createLibraryBook(app: FastifyInstance, input: LibraryBookCreateRequest, request?: FastifyRequest): Promise<LibraryBook>
  createLibraryLoan(app: FastifyInstance, input: LibraryLoanCreateRequest, request?: FastifyRequest): Promise<LibraryLoan>
  returnLibraryBook(app: FastifyInstance, input: LibraryReturnRequest, request?: FastifyRequest): Promise<LibraryLoan>
}
