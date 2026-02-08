import type { LibraryBookCreateRequest } from '../types/LibraryBookCreateRequest'
import type { LibraryBook } from '../types/LibraryBook'
import type { LibraryBookList } from '../types/LibraryBookList'
import type { LibraryLoanCreateRequest } from '../types/LibraryLoanCreateRequest'
import type { LibraryLoan } from '../types/LibraryLoan'
import type { LibraryReturnRequest } from '../types/LibraryReturnRequest'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface LibraryController {
  listLibraryBooks(headers?: RequestHeaders): Promise<LibraryBookList>
  createLibraryBook(input: LibraryBookCreateRequest, headers?: RequestHeaders): Promise<LibraryBook>
  createLibraryLoan(input: LibraryLoanCreateRequest, headers?: RequestHeaders): Promise<LibraryLoan>
  returnLibraryBook(input: LibraryReturnRequest, headers?: RequestHeaders): Promise<LibraryLoan>
}
