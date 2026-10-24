
export type TaxJurisdictionRequest = 
{
  jurisdiction_code: string
  country_code: string
  subdivision_code?: (string) | null
  name: string
  tax_system: string
}
