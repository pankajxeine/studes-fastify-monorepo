
export type SalesAgentResponse = 
{
  record_code: string
  sales_agent_id: string
  agent_code: string
  agent_type: string
  app_user_id?: (string) | null
  legal_name: string
  display_name: string
  email: string
  phone?: (string) | null
  country_code: string
  territory_id?: (string) | null
  branch_id?: (string) | null
  parent_agent_id?: (string) | null
  tier: string
  status: string
  tax_id?: (string) | null
  payout_currency_code: string
  payout_account_ref?: (string) | null
  kyc_verified_at?: (string) | null
  contract_start?: (string) | null
  contract_end?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
