
export type LoanRequest = 
{
  book_copy_id: string
  library_membership_id: string
  issued_at?: string
  due_on: string
  returned_at?: (string) | null
  status?: string
  renewal_count?: number
  fine_per_day_amount?: string
  fine_amount?: string
  fine_waived_amount?: string
  fine_invoice_id?: (string) | null
  issued_by_user_id: string
  received_by_user_id?: (string) | null
  return_condition?: (string) | null
  notes?: (string) | null
}
