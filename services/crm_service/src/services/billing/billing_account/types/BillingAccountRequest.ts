
export type BillingAccountRequest = 
{
  account_id: string
  legal_entity_id: string
  currency_code: string
  tax_jurisdiction_code?: (string) | null
  tax_id?: (string) | null
  is_tax_exempt?: boolean
  bill_to_contact_id?: (string) | null
  invoice_email?: (string) | null
  billing_address?: (unknown) | null
  payment_terms_days?: number
  auto_collect?: boolean
  dunning_policy_id?: (string) | null
  status?: string
}
