
export type LeadResponse = 
{
  id: number
  public_id: string
  record_code: string
  lead_id: string
  lead_number: string
  source: string
  campaign_id?: (string) | null
  company_name: string
  contact_name: string
  email: string
  phone?: (string) | null
  country_code?: (string) | null
  industry_code?: (string) | null
  interested_application_id?: (string) | null
  status: string
  score: number
  owner_user_id?: (string) | null
  sales_agent_id?: (string) | null
  branch_id?: (string) | null
  converted_account_id?: (string) | null
  converted_at?: (string) | null
  disqualify_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
