
export type PersonAddressResponse = 
{
  id: number
  public_id: string
  record_code: string
  person_address_id: string
  person_id: string
  address_type: string
  address_line1: string
  address_line2?: (string) | null
  city: string
  state_region?: (string) | null
  postal_code?: (string) | null
  country_code: string
  is_primary: boolean
  valid_from?: (string) | null
  valid_to?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
