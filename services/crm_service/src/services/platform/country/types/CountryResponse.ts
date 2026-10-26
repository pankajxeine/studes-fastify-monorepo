
export type CountryResponse = 
{
  record_code: string
  country_id: string
  country_code: string
  iso3: string
  name: string
  phone_prefix?: (string) | null
  default_currency_code?: (string) | null
  is_active: boolean
  created_at: string
  updated_at: string
}
