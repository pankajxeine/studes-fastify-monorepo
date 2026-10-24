
export type OpportunityRequest = 
{
  opportunity_number?: string
  account_id: string
  lead_id?: (string) | null
  name: string
  application_id: string
  deal_type?: string
  stage?: string
  amount?: (string) | null
  currency_code: string
  probability?: string
  expected_close_date?: (string) | null
  owner_user_id?: (string) | null
  sales_agent_id?: (string) | null
  branch_id?: (string) | null
  lost_reason?: (string) | null
  closed_at?: (string) | null
}
