
export type InvoiceResponse = 
{
  record_code: string
  invoice_id: string
  invoice_number?: (string) | null
  billing_account_id: string
  legal_entity_id: string
  subscription_id?: (string) | null
  invoice_type: string
  currency_code: string
  status: string
  period_start?: (string) | null
  period_end?: (string) | null
  issue_date?: (string) | null
  due_date?: (string) | null
  subtotal: string
  discount_total: string
  tax_total: string
  total: string
  amount_paid: string
  amount_credited: string
  balance_due?: (string) | null
  fx_rate_to_functional?: (number) | null
  finalized_at?: (string) | null
  paid_at?: (string) | null
  voided_at?: (string) | null
  void_reason?: (string) | null
  written_off_at?: (string) | null
  pdf_ref?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
