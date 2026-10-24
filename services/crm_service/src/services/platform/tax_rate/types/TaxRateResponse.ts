
export type TaxRateResponse = 
{
  id: number
  public_id: string
  record_code: string
  tax_rate_id: string
  jurisdiction_code: string
  tax_code: string
  name: string
  rate: string
  valid_from: string
  valid_to?: (string) | null
  created_at: string
  created_by?: (string) | null
}
