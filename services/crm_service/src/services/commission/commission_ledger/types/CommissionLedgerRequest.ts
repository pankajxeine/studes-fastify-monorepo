
export type CommissionLedgerRequest = 
{
  sales_agent_id: string
  entry_type: string
  amount: string
  currency_code: string
  basis_amount?: (string) | null
  rate_percent?: (string) | null
  hierarchy_depth?: (number) | null
  commission_rule_id?: (string) | null
  invoice_line_id?: (string) | null
  payment_allocation_id?: (string) | null
  reverses_entry_id?: (string) | null
  status?: string
  earned_at?: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  payout_id?: (string) | null
  note?: (string) | null
}
