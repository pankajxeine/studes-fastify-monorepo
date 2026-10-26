
export type PayoutResponse = 
{
  record_code: string
  payout_id: string
  sales_agent_id: string
  period_start: string
  period_end: string
  currency_code: string
  gross_amount: string
  tax_withheld: string
  net_amount?: (string) | null
  status: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  paid_at?: (string) | null
  payment_ref?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
