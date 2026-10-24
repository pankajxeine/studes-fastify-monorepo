
export type FxRateRequest = 
{
  base_currency_code: string
  quote_currency_code: string
  rate_date: string
  rate: number
  source?: string
}
