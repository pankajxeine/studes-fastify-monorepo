
export type SubStoreDetailsResponse = 
{
  id?: number
  sub_company_id?: number
  pos_store_id?: number
  sub_id?: number
  store_name?: string
  phone?: string
  billing_contact_person?: string
  billing_address1?: string
  billing_address2?: string
  billing_country?: number
  billing_state?: number
  billing_city?: string
  billing_postalcode?: string
  shipping_contact_person?: string
  shipping_address1?: string
  shipping_address2?: string
  shipping_country?: number
  shipping_state?: number
  shipping_city?: string
  shipping_postalcode?: string
  mid?: string
  virtual_terminal?: string
  routing_number?: string
  account_number?: string
  timezone_id?: number
  is_primary_store?: boolean
  is_billing_shipping_same?: boolean
  store_sequance?: number
  ach_company?: string
  bank_account_type?: "Business" | "Personal"
  receiving_account?: "Checking" | "Savings"
  purchased_terms?: Record<string, unknown>
  created_at?: string
  updated_at?: string
}
