
export type CurrencyResponse = 
{
  record_code: string
  currency_id: string
  currency_code: string
  name: string
  symbol?: (string) | null
  minor_units: number
  is_active: boolean
  created_at: string
  updated_at: string
}
