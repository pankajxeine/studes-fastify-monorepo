
export type VendorRequest = 
{
  code: string
  name: string
  legal_name?: (string) | null
  service_category: string
  tax_id?: (string) | null
  contact_name?: (string) | null
  email?: (string) | null
  phone?: (string) | null
  website?: (string) | null
  address_line1?: (string) | null
  address_line2?: (string) | null
  city?: (string) | null
  state_region?: (string) | null
  postal_code?: (string) | null
  country_code?: (string) | null
  payment_terms_days?: number
  bank_account_name?: (string) | null
  bank_account_no?: (string) | null
  bank_routing_code?: (string) | null
  rating?: (number) | null
  is_active?: boolean
  notes?: (string) | null
}
