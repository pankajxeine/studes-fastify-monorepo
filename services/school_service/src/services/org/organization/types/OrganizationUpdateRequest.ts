
export type OrganizationUpdateRequest = 
{
  is_singleton: boolean
  name: string
  short_name: (string) | null
  legal_name: (string) | null
  registration_no: (string) | null
  tax_id: (string) | null
  email: (string) | null
  phone: (string) | null
  website: (string) | null
  address_line1: (string) | null
  address_line2: (string) | null
  city: (string) | null
  state_region: (string) | null
  postal_code: (string) | null
  country_code: string
  currency_code: string
  timezone: string
  locale: string
  academic_year_start_month: number
  logo_file_id: (string) | null
  motto: (string) | null
  founded_year: (number) | null
}
