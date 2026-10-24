
export type PersonAddressRequest = 
{
  person_id: string
  address_type?: string
  address_line1: string
  address_line2?: (string) | null
  city: string
  state_region?: (string) | null
  postal_code?: (string) | null
  country_code: string
  is_primary?: boolean
  valid_from?: (string) | null
  valid_to?: (string) | null
}
