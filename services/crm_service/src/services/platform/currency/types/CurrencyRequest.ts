
export type CurrencyRequest = 
{
  currency_code: string
  name: string
  symbol?: (string) | null
  minor_units?: number
  is_active?: boolean
}
