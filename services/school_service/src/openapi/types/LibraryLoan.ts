import type { LibraryLoanCreateRequest } from './LibraryLoanCreateRequest'

export type LibraryLoan = LibraryLoanCreateRequest & 
{
  id: string
  loaned_at?: string
  returned_at?: string
}
