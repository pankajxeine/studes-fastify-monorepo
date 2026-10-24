
export type LegalEntityUpdateRequest = 
{
  legal_entity_code: string
  legal_name: string
  country_code: string
  tax_registration_no: (string) | null
  functional_currency_code: string
  registered_address: unknown
  invoice_prefix: string
  is_active: boolean
}
