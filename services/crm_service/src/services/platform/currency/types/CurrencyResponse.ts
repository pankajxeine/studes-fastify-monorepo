
export type CurrencyResponse = 
{
  id: number
  public_id: string
  record_code: string
  currency_code: string
  name: string
  symbol?: (string) | null
  minor_units: number
  is_active: boolean
  created_at: string
  updated_at: string
}
