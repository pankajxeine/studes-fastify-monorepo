
export type LegalEntityResponse = 
{
  id: number
  public_id: string
  record_code: string
  legal_entity_id: string
  legal_entity_code: string
  legal_name: string
  country_code: string
  tax_registration_no?: (string) | null
  functional_currency_code: string
  registered_address: unknown
  invoice_prefix: string
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
