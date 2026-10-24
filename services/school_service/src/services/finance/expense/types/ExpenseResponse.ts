
export type ExpenseResponse = 
{
  id: number
  public_id: string
  record_code: string
  expense_id: string
  expense_no: string
  campus_id: string
  expense_category_code: string
  vendor_id?: (string) | null
  file_id?: (string) | null
  description: string
  vendor_invoice_no?: (string) | null
  expense_date: string
  amount: string
  tax_amount: string
  total_amount?: (number) | null
  status: string
  submitted_by_user_id: string
  submitted_at: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  rejection_reason?: (string) | null
  payment_method?: (string) | null
  paid_on?: (string) | null
  payment_reference_no?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
