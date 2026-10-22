
export type CustomersRequest = 
{
  id?: number
  name?: string
  contact_title?: string
  customer_type?: string
  contact_name?: string
  customer_status_id?: number
  created_by?: number
  updated_by?: number
  customer_number?: string
  type?: string
  customer_email?: string
  client_email?: string
  dba?: string
  contract_start_date?: string
  contract_expire_date?: string
  cost_center?: string
  city?: string
  state_id?: number
  country_id?: number
  postal_code?: number
  phone_number?: string
  street_address?: string
  chain_number?: string
  sic_code?: number
  branch_id?: number
  status?: "Active" | "Inactive"
  hours_elapsed?: number
  minutes_elapsed?: number
  is_new_client?: boolean
  allow_package_upgrade?: boolean
}
