
export type TaxJurisdictionResponse = 
{
  id: number
  public_id: string
  record_code: string
  jurisdiction_code: string
  country_code: string
  subdivision_code?: (string) | null
  name: string
  tax_system: string
  created_at: string
  updated_at: string
}
