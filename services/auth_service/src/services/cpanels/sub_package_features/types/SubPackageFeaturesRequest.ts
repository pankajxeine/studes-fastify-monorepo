export type SubPackageFeaturesRequest = 
{
  id?: number
  sub_package_id?: number
  feature_id?: number
  feature_type?: string
  primary_price?: number
  additional_price?: number
  trial_period_days?: number
  billing_date?: string
  expiry_date?: string
  purchased_date?: string
  purchased_terms?: Record<string, unknown>
  cancel_date?: string
  cancel_terms?: Record<string, unknown>
  status?: string
  source_of_purchase?: string
  source_of_cancellation?: string
  deleted_at?: string
}
