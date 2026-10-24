
export type OnboardingRequestResponse = 
{
  id: number
  public_id: string
  record_code: string
  request_id: string
  request_number: string
  account_id: string
  opportunity_id?: (string) | null
  quote_id?: (string) | null
  application_id: string
  plan_version_id: string
  plan_price_id: string
  quantity: number
  coupon_id?: (string) | null
  requested_tenant_code: string
  display_name: string
  region_code: string
  data_residency: string
  timezone: string
  default_locale: string
  is_sandbox: boolean
  parent_tenant_id?: (string) | null
  owner_contact_id: string
  billing_contact_id?: (string) | null
  owning_branch_id?: (string) | null
  sales_agent_id?: (string) | null
  requires_kyc: boolean
  status: string
  submitted_at?: (string) | null
  submitted_by_user_id?: (string) | null
  approved_at?: (string) | null
  rejected_reason?: (string) | null
  tenant_id?: (string) | null
  tenant_application_id?: (string) | null
  subscription_id?: (string) | null
  completed_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
