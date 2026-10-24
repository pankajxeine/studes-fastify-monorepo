
export type TaxRateRequest = 
{
  jurisdiction_code: string
  tax_code?: string
  name: string
  rate: string
  valid_from: string
  valid_to?: (string) | null
}
