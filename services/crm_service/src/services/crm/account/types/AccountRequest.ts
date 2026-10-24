
export type AccountRequest = 
{
  account_number?: string
  account_type?: string
  legal_name: string
  display_name: string
  industry_code?: (string) | null
  country_code: string
  tax_id?: (string) | null
  website?: (string) | null
  employee_band?: (string) | null
  billing_address?: (unknown) | null
  owner_user_id?: (string) | null
  branch_id?: (string) | null
  territory_id?: (string) | null
  sales_agent_id?: (string) | null
  parent_account_id?: (string) | null
}
