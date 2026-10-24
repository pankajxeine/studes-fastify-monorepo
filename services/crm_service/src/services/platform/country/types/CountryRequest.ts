
export type CountryRequest = 
{
  country_code: string
  iso3: string
  name: string
  phone_prefix?: (string) | null
  default_currency_code?: (string) | null
  is_active?: boolean
}
