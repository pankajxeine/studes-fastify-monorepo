
export type PlanPriceResponse = 
{
  record_code: string
  plan_price_id: string
  plan_version_id: string
  price_book_id: string
  billing_period: string
  pricing_model: string
  unit_amount: string
  tiers?: (unknown) | null
  setup_fee: string
  is_active: boolean
  created_at: string
  created_by?: (string) | null
}
