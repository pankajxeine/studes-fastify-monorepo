
export type TaxJurisdictionResponse = 
{
  record_code: string
  tax_jurisdiction_id: string
  jurisdiction_code: string
  country_code: string
  subdivision_code?: (string) | null
  name: string
  tax_system: string
  created_at: string
  updated_at: string
}
