
export type InvoiceResponse = 
{
  id: number
  public_id: string
  record_code: string
  invoice_id: string
  invoice_no: string
  student_id: string
  academic_year_id: string
  campus_id: string
  fee_installment_id?: (string) | null
  term_id?: (string) | null
  invoice_date: string
  due_on: string
  status: string
  subtotal_amount: string
  discount_amount: string
  total_amount: string
  paid_amount: string
  balance_amount?: (number) | null
  notes?: (string) | null
  issued_at?: (string) | null
  issued_by_user_id?: (string) | null
  cancelled_at?: (string) | null
  cancelled_by_user_id?: (string) | null
  cancellation_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
