
export type BillingHistoryResponse = 
{
  id?: number
  sub_id?: number
  sub_store_id?: number
  customer_id?: number
  feature_id?: number
  item?: string
  price?: number
  price_per_month?: number
  cost_price?: number
  type?: string
  purchased_date?: string
  billing_date?: string
  expiry_date?: string
  trial_period_days?: number
  description?: string
  created_at?: string
  updated_at?: string
}
