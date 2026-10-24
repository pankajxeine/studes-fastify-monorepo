
export type LoanResponse = 
{
  id: number
  public_id: string
  record_code: string
  loan_id: string
  book_copy_id: string
  library_membership_id: string
  issued_at: string
  due_on: string
  returned_at?: (string) | null
  status: string
  renewal_count: number
  fine_per_day_amount: string
  fine_amount: string
  fine_waived_amount: string
  fine_invoice_id?: (string) | null
  issued_by_user_id: string
  received_by_user_id?: (string) | null
  return_condition?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
