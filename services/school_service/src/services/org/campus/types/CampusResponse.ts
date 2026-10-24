
export type CampusResponse = 
{
  id: number
  public_id: string
  record_code: string
  campus_id: string
  organization_id: string
  code: string
  name: string
  campus_type: string
  address_line1?: (string) | null
  address_line2?: (string) | null
  city?: (string) | null
  state_region?: (string) | null
  postal_code?: (string) | null
  country_code?: (string) | null
  phone?: (string) | null
  email?: (string) | null
  timezone?: (string) | null
  latitude?: (number) | null
  longitude?: (number) | null
  established_on?: (string) | null
  principal_staff_id?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
