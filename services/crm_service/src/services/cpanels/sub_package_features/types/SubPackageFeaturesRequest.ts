
export type SubPackageFeaturesRequest = 
{
  id?: number
  sub_package_id?: number
  feature_id?: number
  feature_type?: "None" | "Base" | "A la carte"
  primary_price?: number
  additional_price?: number
  trial_period_days?: number
  billing_date?: string
  expiry_date?: string
  purchased_date?: string
  purchased_terms?: Record<string, unknown>
  cancel_date?: string
  cancel_terms?: Record<string, unknown>
  status?: "Active" | "Inactive"
  source_of_purchase?: "crm" | "cpanel" | "other"
  source_of_cancellation?: "crm" | "cpanel" | "other"
}
