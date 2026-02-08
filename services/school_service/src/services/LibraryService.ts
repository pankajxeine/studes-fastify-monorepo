import type { LibraryBookCreateRequest } from '../openapi/types/LibraryBookCreateRequest'
import type { LibraryBook } from '../openapi/types/LibraryBook'
import type { LibraryBookList } from '../openapi/types/LibraryBookList'
import type { LibraryLoanCreateRequest } from '../openapi/types/LibraryLoanCreateRequest'
import type { LibraryLoan } from '../openapi/types/LibraryLoan'
import type { LibraryReturnRequest } from '../openapi/types/LibraryReturnRequest'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { LibraryController } from '../openapi/controller/LibraryController'

export class LibraryService implements LibraryController {
  public async listLibraryBooks(headers?: RequestHeaders): Promise<LibraryBookList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createLibraryBook(input: LibraryBookCreateRequest, headers?: RequestHeaders): Promise<LibraryBook> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async createLibraryLoan(input: LibraryLoanCreateRequest, headers?: RequestHeaders): Promise<LibraryLoan> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async returnLibraryBook(input: LibraryReturnRequest, headers?: RequestHeaders): Promise<LibraryLoan> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
