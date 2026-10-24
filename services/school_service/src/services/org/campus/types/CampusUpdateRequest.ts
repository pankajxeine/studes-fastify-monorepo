
export type CampusUpdateRequest = 
{
  organization_id: string
  code: string
  name: string
  campus_type: string
  address_line1: (string) | null
  address_line2: (string) | null
  city: (string) | null
  state_region: (string) | null
  postal_code: (string) | null
  country_code: (string) | null
  phone: (string) | null
  email: (string) | null
  timezone: (string) | null
  latitude: (number) | null
  longitude: (number) | null
  established_on: (string) | null
  principal_staff_id: (string) | null
  is_active: boolean
}
