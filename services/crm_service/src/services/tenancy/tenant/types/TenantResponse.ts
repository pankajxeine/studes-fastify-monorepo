
export type TenantResponse = 
{
  id: number
  public_id: string
  record_code: string
  tenant_id: string
  tenant_code: string
  customer_account_id: string
  legal_name: string
  display_name: string
  status: string
  region_code: string
  data_residency: string
  timezone: string
  default_locale: string
  default_currency_code: string
  owning_branch_id?: (string) | null
  sales_agent_id?: (string) | null
  is_sandbox: boolean
  parent_tenant_id?: (string) | null
  legal_hold: boolean
  suspended_reason?: (string) | null
  activated_at?: (string) | null
  cancelled_at?: (string) | null
  purge_after?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
